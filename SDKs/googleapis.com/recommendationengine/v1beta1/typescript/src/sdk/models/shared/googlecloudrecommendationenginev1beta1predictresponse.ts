import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult } from "./googlecloudrecommendationenginev1beta1predictresponsepredictionresult";



// GoogleCloudRecommendationengineV1beta1PredictResponse
/** 
 * Response message for predict method.
**/
export class GoogleCloudRecommendationengineV1beta1PredictResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=itemsMissingInCatalog" })
  itemsMissingInCatalog?: string[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=recommendationToken" })
  recommendationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult })
  results?: GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult[];
}
