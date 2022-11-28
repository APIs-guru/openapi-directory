import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionRange } from "./dimensionrange";
/**
 * Moves one or more rows or columns.
**/
export declare class MoveDimensionRequest extends SpeakeasyBase {
    destinationIndex?: number;
    source?: DimensionRange;
}
