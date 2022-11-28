import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaMerchantCenterLink } from "./googlecloudretailv2betamerchantcenterlink";



// GoogleCloudRetailV2betaMerchantCenterLinkingConfig
/** 
 * Configures Merchant Center linking. Links contained in the config will be used to sync data from a Merchant Center account to a Cloud Retail branch.
**/
export class GoogleCloudRetailV2betaMerchantCenterLinkingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links", elemType: GoogleCloudRetailV2betaMerchantCenterLink })
  links?: GoogleCloudRetailV2betaMerchantCenterLink[];
}
