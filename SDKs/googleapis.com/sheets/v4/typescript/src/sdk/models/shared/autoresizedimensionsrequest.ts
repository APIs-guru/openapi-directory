import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSourceSheetDimensionRange } from "./datasourcesheetdimensionrange";
import { DimensionRange } from "./dimensionrange";



// AutoResizeDimensionsRequest
/** 
 * Automatically resizes one or more dimensions based on the contents of the cells in that dimension.
**/
export class AutoResizeDimensionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSourceSheetDimensions" })
  dataSourceSheetDimensions?: DataSourceSheetDimensionRange;

  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: DimensionRange;
}
