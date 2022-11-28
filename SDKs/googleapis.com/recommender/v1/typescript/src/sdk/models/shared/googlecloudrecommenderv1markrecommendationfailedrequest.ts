import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecommenderV1MarkRecommendationFailedRequest
/** 
 * Request for the `MarkRecommendationFailed` Method.
**/
export class GoogleCloudRecommenderV1MarkRecommendationFailedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=stateMetadata" })
  stateMetadata?: Map<string, string>;
}
