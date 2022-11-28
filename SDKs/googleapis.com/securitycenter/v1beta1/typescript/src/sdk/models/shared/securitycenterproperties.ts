import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SecurityCenterProperties
/** 
 * Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user.
**/
export class SecurityCenterProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceOwners" })
  resourceOwners?: string[];

  @SpeakeasyMetadata({ data: "json, name=resourceParent" })
  resourceParent?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceProject" })
  resourceProject?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;
}
