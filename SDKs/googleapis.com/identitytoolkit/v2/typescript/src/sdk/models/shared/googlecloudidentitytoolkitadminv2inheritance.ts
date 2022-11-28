import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIdentitytoolkitAdminV2Inheritance
/** 
 * Settings that the tenants will inherit from project level.
**/
export class GoogleCloudIdentitytoolkitAdminV2Inheritance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emailSendingConfig" })
  emailSendingConfig?: boolean;
}
