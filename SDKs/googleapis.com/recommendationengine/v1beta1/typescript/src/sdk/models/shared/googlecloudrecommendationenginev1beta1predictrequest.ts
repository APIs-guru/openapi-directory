import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1UserEvent } from "./googlecloudrecommendationenginev1beta1userevent";



// GoogleCloudRecommendationengineV1beta1PredictRequest
/** 
 * Request message for Predict method. Full resource name of the format: `{name=projects/* /locations/global/catalogs/default_catalog/eventStores/default_event_store/placements/*}` The id of the recommendation engine placement. This id is used to identify the set of models that will be used to make the prediction. We currently support three placements with the following IDs by default: // * `shopping_cart`: Predicts items frequently bought together with one or more catalog items in the same shopping session. Commonly displayed after `add-to-cart` event, on product detail pages, or on the shopping cart page. * `home_page`: Predicts the next product that a user will most likely engage with or purchase based on the shopping or viewing history of the specified `userId` or `visitorId`. For example - Recommendations for you. * `product_detail`: Predicts the next product that a user will most likely engage with or purchase. The prediction is based on the shopping or viewing history of the specified `userId` or `visitorId` and its relevance to a specified `CatalogItem`. Typically used on product detail pages. For example - More items like this. * `recently_viewed_default`: Returns up to 75 items recently viewed by the specified `userId` or `visitorId`, most recent ones first. Returns nothing if neither of them has viewed any items yet. For example - Recently viewed. The full list of available placements can be seen at https://console.cloud.google.com/recommendation/catalogs/default_catalog/placements
**/
export class GoogleCloudRecommendationengineV1beta1PredictRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=userEvent" })
  userEvent?: GoogleCloudRecommendationengineV1beta1UserEvent;
}
