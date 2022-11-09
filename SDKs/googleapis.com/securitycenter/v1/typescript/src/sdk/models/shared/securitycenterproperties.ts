import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Folder } from "./folder";


// SecurityCenterProperties
/** 
 * Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user.
**/
export class SecurityCenterProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=folders", elemType: shared.Folder })
  folders?: Folder[];

  @Metadata({ data: "json, name=resourceDisplayName" })
  resourceDisplayName?: string;

  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=resourceOwners" })
  resourceOwners?: string[];

  @Metadata({ data: "json, name=resourceParent" })
  resourceParent?: string;

  @Metadata({ data: "json, name=resourceParentDisplayName" })
  resourceParentDisplayName?: string;

  @Metadata({ data: "json, name=resourceProject" })
  resourceProject?: string;

  @Metadata({ data: "json, name=resourceProjectDisplayName" })
  resourceProjectDisplayName?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: string;
}
