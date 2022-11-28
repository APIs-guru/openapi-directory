import { SpeakeasyBase } from "../../../internal/utils";
import { DebugOptions } from "./debugoptions";
export declare class DeleteQueueItemsRequest extends SpeakeasyBase {
    connectorName?: string;
    debugOptions?: DebugOptions;
    queue?: string;
}
