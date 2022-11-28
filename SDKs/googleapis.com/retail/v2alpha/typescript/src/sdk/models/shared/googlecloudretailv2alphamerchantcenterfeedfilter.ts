import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2alphaMerchantCenterFeedFilter
/** 
 * Merchant Center Feed filter criterion.
**/
export class GoogleCloudRetailV2alphaMerchantCenterFeedFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primaryFeedId" })
  primaryFeedId?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryFeedName" })
  primaryFeedName?: string;
}
