import { SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";
import { SourceAndDestination } from "./sourceanddestination";
/**
 * Fills in more data based on existing data.
**/
export declare class AutoFillRequest extends SpeakeasyBase {
    range?: GridRange;
    sourceAndDestination?: SourceAndDestination;
    useAlternateSeries?: boolean;
}
