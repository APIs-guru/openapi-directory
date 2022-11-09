import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PollingOptions } from "./pollingoptions";
/**
 * Async options that determine when a resource should finish.
**/
export declare class AsyncOptions extends SpeakeasyBase {
    methodMatch?: string;
    pollingOptions?: PollingOptions;
}
