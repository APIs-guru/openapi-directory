import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IapTestServiceAccountInfo
/** 
 * Describes authentication configuration when Web-Security-Scanner service account is added in Identity-Aware-Proxy (IAP) access policies.
**/
export class IapTestServiceAccountInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=targetAudienceClientId" })
  targetAudienceClientId?: string;
}
