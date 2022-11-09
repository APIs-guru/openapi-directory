import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionProperties } from "./dimensionproperties";
import { RowData } from "./rowdata";
import { DimensionProperties } from "./dimensionproperties";


// GridData
/** 
 * Data in the grid, as well as metadata about the dimensions.
**/
export class GridData extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnMetadata", elemType: shared.DimensionProperties })
  columnMetadata?: DimensionProperties[];

  @Metadata({ data: "json, name=rowData", elemType: shared.RowData })
  rowData?: RowData[];

  @Metadata({ data: "json, name=rowMetadata", elemType: shared.DimensionProperties })
  rowMetadata?: DimensionProperties[];

  @Metadata({ data: "json, name=startColumn" })
  startColumn?: number;

  @Metadata({ data: "json, name=startRow" })
  startRow?: number;
}
