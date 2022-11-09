import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecommenderV1MarkRecommendationSucceededRequest
/** 
 * Request for the `MarkRecommendationSucceeded` Method.
**/
export class GoogleCloudRecommenderV1MarkRecommendationSucceededRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=stateMetadata" })
  stateMetadata?: Map<string, string>;
}
