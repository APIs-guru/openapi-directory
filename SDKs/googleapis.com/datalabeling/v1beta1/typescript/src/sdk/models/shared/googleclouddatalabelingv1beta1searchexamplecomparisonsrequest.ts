import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest
/** 
 * Request message of SearchExampleComparisons.
**/
export class GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
