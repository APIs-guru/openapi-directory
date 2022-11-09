import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecommenderV1MarkRecommendationFailedRequest
/** 
 * Request for the `MarkRecommendationFailed` Method.
**/
export class GoogleCloudRecommenderV1MarkRecommendationFailedRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=stateMetadata" })
  stateMetadata?: Map<string, string>;
}
