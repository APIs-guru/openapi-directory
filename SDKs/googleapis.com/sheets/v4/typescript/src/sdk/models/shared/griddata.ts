import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionProperties } from "./dimensionproperties";
import { RowData } from "./rowdata";



// GridData
/** 
 * Data in the grid, as well as metadata about the dimensions.
**/
export class GridData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnMetadata", elemType: DimensionProperties })
  columnMetadata?: DimensionProperties[];

  @SpeakeasyMetadata({ data: "json, name=rowData", elemType: RowData })
  rowData?: RowData[];

  @SpeakeasyMetadata({ data: "json, name=rowMetadata", elemType: DimensionProperties })
  rowMetadata?: DimensionProperties[];

  @SpeakeasyMetadata({ data: "json, name=startColumn" })
  startColumn?: number;

  @SpeakeasyMetadata({ data: "json, name=startRow" })
  startRow?: number;
}
