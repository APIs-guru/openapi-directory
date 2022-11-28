import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Folder } from "./folder";



// SecurityCenterProperties
/** 
 * Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user.
**/
export class SecurityCenterProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=folders", elemType: Folder })
  folders?: Folder[];

  @SpeakeasyMetadata({ data: "json, name=resourceDisplayName" })
  resourceDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceOwners" })
  resourceOwners?: string[];

  @SpeakeasyMetadata({ data: "json, name=resourceParent" })
  resourceParent?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceParentDisplayName" })
  resourceParentDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceProject" })
  resourceProject?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceProjectDisplayName" })
  resourceProjectDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;
}
