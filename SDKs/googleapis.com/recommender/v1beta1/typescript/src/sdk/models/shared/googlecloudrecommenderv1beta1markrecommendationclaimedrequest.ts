import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest
/** 
 * Request for the `MarkRecommendationClaimed` Method.
**/
export class GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=stateMetadata" })
  stateMetadata?: Map<string, string>;
}
