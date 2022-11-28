import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudChannelV1FetchReportResultsRequest
/** 
 * Request message for CloudChannelReportsService.FetchReportResults.
**/
export class GoogleCloudChannelV1FetchReportResultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
