import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IapTestServiceAccountInfo
/** 
 * Describes authentication configuration when Web-Security-Scanner service account is added in Identity-Aware-Proxy (IAP) access policies.
**/
export class IapTestServiceAccountInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=targetAudienceClientId" })
  targetAudienceClientId?: string;
}
