import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Report } from "./googlecloudchannelv1report";
/**
 * Response message for CloudChannelReportsService.ListReports.
**/
export declare class GoogleCloudChannelV1ListReportsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    reports?: GoogleCloudChannelV1Report[];
}
