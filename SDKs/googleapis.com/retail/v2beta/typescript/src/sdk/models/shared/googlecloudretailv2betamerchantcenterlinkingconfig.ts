import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2betaMerchantCenterLink } from "./googlecloudretailv2betamerchantcenterlink";


// GoogleCloudRetailV2betaMerchantCenterLinkingConfig
/** 
 * Configures Merchant Center linking. Links contained in the config will be used to sync data from a Merchant Center account to a Cloud Retail branch.
**/
export class GoogleCloudRetailV2betaMerchantCenterLinkingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=links", elemType: shared.GoogleCloudRetailV2betaMerchantCenterLink })
  links?: GoogleCloudRetailV2betaMerchantCenterLink[];
}
