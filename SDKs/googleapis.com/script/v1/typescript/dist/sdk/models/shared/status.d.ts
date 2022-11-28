import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, the response body's error field contains this `Status` object.
**/
export declare class Status extends SpeakeasyBase {
    code?: number;
    details?: Map<string, any>[];
    message?: string;
}
