import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SecurityCenterProperties
/** 
 * Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user.
**/
export class SecurityCenterProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=resourceOwners" })
  resourceOwners?: string[];

  @Metadata({ data: "json, name=resourceParent" })
  resourceParent?: string;

  @Metadata({ data: "json, name=resourceProject" })
  resourceProject?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: string;
}
