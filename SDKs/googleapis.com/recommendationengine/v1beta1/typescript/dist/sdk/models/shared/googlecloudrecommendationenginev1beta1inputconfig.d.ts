import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1BigQuerySource } from "./googlecloudrecommendationenginev1beta1bigquerysource";
import { GoogleCloudRecommendationengineV1beta1CatalogInlineSource } from "./googlecloudrecommendationenginev1beta1cataloginlinesource";
import { GoogleCloudRecommendationengineV1beta1GcsSource } from "./googlecloudrecommendationenginev1beta1gcssource";
import { GoogleCloudRecommendationengineV1beta1UserEventInlineSource } from "./googlecloudrecommendationenginev1beta1usereventinlinesource";
/**
 * The input config source.
**/
export declare class GoogleCloudRecommendationengineV1beta1InputConfig extends SpeakeasyBase {
    bigQuerySource?: GoogleCloudRecommendationengineV1beta1BigQuerySource;
    catalogInlineSource?: GoogleCloudRecommendationengineV1beta1CatalogInlineSource;
    gcsSource?: GoogleCloudRecommendationengineV1beta1GcsSource;
    userEventInlineSource?: GoogleCloudRecommendationengineV1beta1UserEventInlineSource;
}
