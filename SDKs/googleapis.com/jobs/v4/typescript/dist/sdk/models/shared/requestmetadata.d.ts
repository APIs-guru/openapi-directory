import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceInfo } from "./deviceinfo";
/**
 * Meta information related to the job searcher or entity conducting the job search. This information is used to improve the performance of the service.
**/
export declare class RequestMetadata extends SpeakeasyBase {
    allowMissingIds?: boolean;
    deviceInfo?: DeviceInfo;
    domain?: string;
    sessionId?: string;
    userId?: string;
}
