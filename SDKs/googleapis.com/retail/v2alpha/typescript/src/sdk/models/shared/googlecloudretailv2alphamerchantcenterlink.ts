import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaMerchantCenterFeedFilter } from "./googlecloudretailv2alphamerchantcenterfeedfilter";



// GoogleCloudRetailV2alphaMerchantCenterLink
/** 
 * Represents a link between a Merchant Center account and a branch. Once a link is established, products from the linked merchant center account will be streamed to the linked branch.
**/
export class GoogleCloudRetailV2alphaMerchantCenterLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branchId" })
  branchId?: string;

  @SpeakeasyMetadata({ data: "json, name=destinations" })
  destinations?: string[];

  @SpeakeasyMetadata({ data: "json, name=feeds", elemType: GoogleCloudRetailV2alphaMerchantCenterFeedFilter })
  feeds?: GoogleCloudRetailV2alphaMerchantCenterFeedFilter[];

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantCenterAccountId" })
  merchantCenterAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
