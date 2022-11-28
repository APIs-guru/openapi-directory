import { SpeakeasyBase } from "../../../internal/utils";
import { TargetingOption } from "./targetingoption";
/**
 * Response message for SearchTargetingOptions.
**/
export declare class SearchTargetingOptionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    targetingOptions?: TargetingOption[];
}
