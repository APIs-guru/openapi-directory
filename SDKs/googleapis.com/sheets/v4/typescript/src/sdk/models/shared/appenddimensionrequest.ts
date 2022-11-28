import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AppendDimensionRequestDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Rows = "ROWS",
    Columns = "COLUMNS"
}


// AppendDimensionRequest
/** 
 * Appends rows or columns to the end of a sheet.
**/
export class AppendDimensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: AppendDimensionRequestDimensionEnum;

  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: number;

  @SpeakeasyMetadata({ data: "json, name=sheetId" })
  sheetId?: number;
}
