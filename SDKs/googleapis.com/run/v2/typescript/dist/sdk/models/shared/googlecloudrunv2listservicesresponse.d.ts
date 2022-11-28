import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Service } from "./googlecloudrunv2service";
/**
 * Response message containing a list of Services.
**/
export declare class GoogleCloudRunV2ListServicesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    services?: GoogleCloudRunV2Service[];
}
