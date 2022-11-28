import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1ReportResultsMetadata } from "./googlecloudchannelv1reportresultsmetadata";
import { GoogleCloudChannelV1Row } from "./googlecloudchannelv1row";
/**
 * Response message for CloudChannelReportsService.FetchReportResults. Contains a tabular representation of the report results.
**/
export declare class GoogleCloudChannelV1FetchReportResultsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    reportMetadata?: GoogleCloudChannelV1ReportResultsMetadata;
    rows?: GoogleCloudChannelV1Row[];
}
