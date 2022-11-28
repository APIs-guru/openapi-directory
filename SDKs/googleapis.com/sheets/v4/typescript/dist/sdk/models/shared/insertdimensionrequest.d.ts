import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionRange } from "./dimensionrange";
/**
 * Inserts rows or columns in a sheet at a particular index.
**/
export declare class InsertDimensionRequest extends SpeakeasyBase {
    inheritFromBefore?: boolean;
    range?: DimensionRange;
}
