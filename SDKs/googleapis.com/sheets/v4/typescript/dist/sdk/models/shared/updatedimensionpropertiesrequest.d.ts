import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceSheetDimensionRange } from "./datasourcesheetdimensionrange";
import { DimensionProperties } from "./dimensionproperties";
import { DimensionRange } from "./dimensionrange";
/**
 * Updates properties of dimensions within the specified range.
**/
export declare class UpdateDimensionPropertiesRequest extends SpeakeasyBase {
    dataSourceSheetRange?: DataSourceSheetDimensionRange;
    fields?: string;
    properties?: DimensionProperties;
    range?: DimensionRange;
}
