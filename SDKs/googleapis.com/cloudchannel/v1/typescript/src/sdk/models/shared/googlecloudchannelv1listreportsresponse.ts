import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Report } from "./googlecloudchannelv1report";



// GoogleCloudChannelV1ListReportsResponse
/** 
 * Response message for CloudChannelReportsService.ListReports.
**/
export class GoogleCloudChannelV1ListReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=reports", elemType: GoogleCloudChannelV1Report })
  reports?: GoogleCloudChannelV1Report[];
}
