import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1DateRange } from "./googlecloudchannelv1daterange";
import { GoogleCloudChannelV1Report } from "./googlecloudchannelv1report";



// GoogleCloudChannelV1ReportResultsMetadata
/** 
 * The features describing the data. Returned by CloudChannelReportsService.RunReportJob and CloudChannelReportsService.FetchReportResults.
**/
export class GoogleCloudChannelV1ReportResultsMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateRange" })
  dateRange?: GoogleCloudChannelV1DateRange;

  @SpeakeasyMetadata({ data: "json, name=precedingDateRange" })
  precedingDateRange?: GoogleCloudChannelV1DateRange;

  @SpeakeasyMetadata({ data: "json, name=report" })
  report?: GoogleCloudChannelV1Report;

  @SpeakeasyMetadata({ data: "json, name=rowCount" })
  rowCount?: string;
}
