import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRecommendationengineV1beta1BigQuerySource } from "./googlecloudrecommendationenginev1beta1bigquerysource";
import { GoogleCloudRecommendationengineV1beta1CatalogInlineSource } from "./googlecloudrecommendationenginev1beta1cataloginlinesource";
import { GoogleCloudRecommendationengineV1beta1GcsSource } from "./googlecloudrecommendationenginev1beta1gcssource";
import { GoogleCloudRecommendationengineV1beta1UserEventInlineSource } from "./googlecloudrecommendationenginev1beta1usereventinlinesource";


// GoogleCloudRecommendationengineV1beta1InputConfig
/** 
 * The input config source.
**/
export class GoogleCloudRecommendationengineV1beta1InputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigQuerySource" })
  bigQuerySource?: GoogleCloudRecommendationengineV1beta1BigQuerySource;

  @Metadata({ data: "json, name=catalogInlineSource" })
  catalogInlineSource?: GoogleCloudRecommendationengineV1beta1CatalogInlineSource;

  @Metadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudRecommendationengineV1beta1GcsSource;

  @Metadata({ data: "json, name=userEventInlineSource" })
  userEventInlineSource?: GoogleCloudRecommendationengineV1beta1UserEventInlineSource;
}
