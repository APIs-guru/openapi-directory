import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult } from "./googlecloudrecommendationenginev1beta1predictresponsepredictionresult";


// GoogleCloudRecommendationengineV1beta1PredictResponse
/** 
 * Response message for predict method.
**/
export class GoogleCloudRecommendationengineV1beta1PredictResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dryRun" })
  dryRun?: boolean;

  @Metadata({ data: "json, name=itemsMissingInCatalog" })
  itemsMissingInCatalog?: string[];

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=recommendationToken" })
  recommendationToken?: string;

  @Metadata({ data: "json, name=results", elemType: shared.GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult })
  results?: GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult[];
}
