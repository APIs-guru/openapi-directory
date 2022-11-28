import { SpeakeasyBase } from "../../../internal/utils";
import { CloudFunction } from "./cloudfunction";
/**
 * Response for the `ListFunctions` method.
**/
export declare class ListFunctionsResponse extends SpeakeasyBase {
    functions?: CloudFunction[];
    nextPageToken?: string;
    unreachable?: string[];
}
