import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceSheetDimensionRange } from "./datasourcesheetdimensionrange";
import { DimensionRange } from "./dimensionrange";
/**
 * Automatically resizes one or more dimensions based on the contents of the cells in that dimension.
**/
export declare class AutoResizeDimensionsRequest extends SpeakeasyBase {
    dataSourceSheetDimensions?: DataSourceSheetDimensionRange;
    dimensions?: DimensionRange;
}
