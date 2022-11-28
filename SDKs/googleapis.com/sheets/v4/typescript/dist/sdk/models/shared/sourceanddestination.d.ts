import { SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";
export declare enum SourceAndDestinationDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Rows = "ROWS",
    Columns = "COLUMNS"
}
/**
 * A combination of a source range and how to extend that source.
**/
export declare class SourceAndDestination extends SpeakeasyBase {
    dimension?: SourceAndDestinationDimensionEnum;
    fillLength?: number;
    source?: GridRange;
}
