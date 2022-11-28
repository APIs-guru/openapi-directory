import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1ReportResultsMetadata } from "./googlecloudchannelv1reportresultsmetadata";
import { GoogleCloudChannelV1Row } from "./googlecloudchannelv1row";



// GoogleCloudChannelV1FetchReportResultsResponse
/** 
 * Response message for CloudChannelReportsService.FetchReportResults. Contains a tabular representation of the report results.
**/
export class GoogleCloudChannelV1FetchReportResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=reportMetadata" })
  reportMetadata?: GoogleCloudChannelV1ReportResultsMetadata;

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: GoogleCloudChannelV1Row })
  rows?: GoogleCloudChannelV1Row[];
}
