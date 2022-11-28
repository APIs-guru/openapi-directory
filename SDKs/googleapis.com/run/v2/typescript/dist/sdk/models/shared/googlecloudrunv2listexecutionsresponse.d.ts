import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Execution } from "./googlecloudrunv2execution";
/**
 * Response message containing a list of Executions.
**/
export declare class GoogleCloudRunV2ListExecutionsResponse extends SpeakeasyBase {
    executions?: GoogleCloudRunV2Execution[];
    nextPageToken?: string;
}
