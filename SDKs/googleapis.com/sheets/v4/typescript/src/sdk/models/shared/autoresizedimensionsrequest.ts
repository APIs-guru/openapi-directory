import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSourceSheetDimensionRange } from "./datasourcesheetdimensionrange";
import { DimensionRange } from "./dimensionrange";


// AutoResizeDimensionsRequest
/** 
 * Automatically resizes one or more dimensions based on the contents of the cells in that dimension.
**/
export class AutoResizeDimensionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSourceSheetDimensions" })
  dataSourceSheetDimensions?: DataSourceSheetDimensionRange;

  @Metadata({ data: "json, name=dimensions" })
  dimensions?: DimensionRange;
}
