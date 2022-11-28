import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Column } from "./googlecloudchannelv1column";
/**
 * The ID and description of a report that was used to generate report data. For example, "GCP Daily Spend", "Google Workspace License Activity", etc.
**/
export declare class GoogleCloudChannelV1Report extends SpeakeasyBase {
    columns?: GoogleCloudChannelV1Column[];
    description?: string;
    displayName?: string;
    name?: string;
}
