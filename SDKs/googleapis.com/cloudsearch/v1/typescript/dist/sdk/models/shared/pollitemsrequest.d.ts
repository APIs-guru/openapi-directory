import { SpeakeasyBase } from "../../../internal/utils";
import { DebugOptions } from "./debugoptions";
export declare enum PollItemsRequestStatusCodesEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Error = "ERROR",
    Modified = "MODIFIED",
    NewItem = "NEW_ITEM",
    Accepted = "ACCEPTED"
}
export declare class PollItemsRequest extends SpeakeasyBase {
    connectorName?: string;
    debugOptions?: DebugOptions;
    limit?: number;
    queue?: string;
    statusCodes?: PollItemsRequestStatusCodesEnum[];
}
