import { SpeakeasyBase } from "../../../internal/utils";
import { SuggestResult } from "./suggestresult";
/**
 * Response of the suggest API.
**/
export declare class SuggestResponse extends SpeakeasyBase {
    suggestResults?: SuggestResult[];
}
