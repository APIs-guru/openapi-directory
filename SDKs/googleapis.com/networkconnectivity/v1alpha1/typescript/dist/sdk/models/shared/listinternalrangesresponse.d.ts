import { SpeakeasyBase } from "../../../internal/utils";
import { InternalRange } from "./internalrange";
/**
 * Response for InternalRange.ListInternalRanges
**/
export declare class ListInternalRangesResponse extends SpeakeasyBase {
    internalRanges?: InternalRange[];
    nextPageToken?: string;
    unreachable?: string[];
}
