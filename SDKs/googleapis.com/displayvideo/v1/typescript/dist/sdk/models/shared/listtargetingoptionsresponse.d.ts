import { SpeakeasyBase } from "../../../internal/utils";
import { TargetingOption } from "./targetingoption";
/**
 * Response message for ListTargetingOptions.
**/
export declare class ListTargetingOptionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    targetingOptions?: TargetingOption[];
}
