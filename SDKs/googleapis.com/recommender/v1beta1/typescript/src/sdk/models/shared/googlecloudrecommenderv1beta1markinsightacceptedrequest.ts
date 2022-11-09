import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequest
/** 
 * Request for the `MarkInsightAccepted` method.
**/
export class GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=stateMetadata" })
  stateMetadata?: Map<string, string>;
}
