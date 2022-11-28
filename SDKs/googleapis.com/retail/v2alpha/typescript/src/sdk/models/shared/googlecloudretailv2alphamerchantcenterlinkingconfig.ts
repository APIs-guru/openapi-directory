import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaMerchantCenterLink } from "./googlecloudretailv2alphamerchantcenterlink";



// GoogleCloudRetailV2alphaMerchantCenterLinkingConfig
/** 
 * Configures Merchant Center linking. Links contained in the config will be used to sync data from a Merchant Center account to a Cloud Retail branch.
**/
export class GoogleCloudRetailV2alphaMerchantCenterLinkingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links", elemType: GoogleCloudRetailV2alphaMerchantCenterLink })
  links?: GoogleCloudRetailV2alphaMerchantCenterLink[];
}
