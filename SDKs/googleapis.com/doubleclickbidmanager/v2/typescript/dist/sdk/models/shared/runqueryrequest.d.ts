import { SpeakeasyBase } from "../../../internal/utils";
import { DataRange } from "./datarange";
/**
 * Request to run a stored query to generate a report.
**/
export declare class RunQueryRequest extends SpeakeasyBase {
    dataRange?: DataRange;
}
