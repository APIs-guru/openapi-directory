import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AppendDimensionRequestDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED"
,    Rows = "ROWS"
,    Columns = "COLUMNS"
}


// AppendDimensionRequest
/** 
 * Appends rows or columns to the end of a sheet.
**/
export class AppendDimensionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimension" })
  dimension?: AppendDimensionRequestDimensionEnum;

  @Metadata({ data: "json, name=length" })
  length?: number;

  @Metadata({ data: "json, name=sheetId" })
  sheetId?: number;
}
