import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest
/** 
 * Request message of SearchExampleComparisons.
**/
export class GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
