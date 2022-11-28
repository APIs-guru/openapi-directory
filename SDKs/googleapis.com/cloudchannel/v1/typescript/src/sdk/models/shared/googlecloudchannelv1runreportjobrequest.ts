import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1DateRange } from "./googlecloudchannelv1daterange";



// GoogleCloudChannelV1RunReportJobRequest
/** 
 * Request message for CloudChannelReportsService.RunReportJob.
**/
export class GoogleCloudChannelV1RunReportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateRange" })
  dateRange?: GoogleCloudChannelV1DateRange;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
