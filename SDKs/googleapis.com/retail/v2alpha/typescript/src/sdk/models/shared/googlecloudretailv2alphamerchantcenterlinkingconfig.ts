import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2alphaMerchantCenterLink } from "./googlecloudretailv2alphamerchantcenterlink";


// GoogleCloudRetailV2alphaMerchantCenterLinkingConfig
/** 
 * Configures Merchant Center linking. Links contained in the config will be used to sync data from a Merchant Center account to a Cloud Retail branch.
**/
export class GoogleCloudRetailV2alphaMerchantCenterLinkingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=links", elemType: shared.GoogleCloudRetailV2alphaMerchantCenterLink })
  links?: GoogleCloudRetailV2alphaMerchantCenterLink[];
}
