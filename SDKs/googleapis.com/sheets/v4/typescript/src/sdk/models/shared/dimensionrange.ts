import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DimensionRangeDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED"
,    Rows = "ROWS"
,    Columns = "COLUMNS"
}


// DimensionRange
/** 
 * A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side.
**/
export class DimensionRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimension" })
  dimension?: DimensionRangeDimensionEnum;

  @Metadata({ data: "json, name=endIndex" })
  endIndex?: number;

  @Metadata({ data: "json, name=sheetId" })
  sheetId?: number;

  @Metadata({ data: "json, name=startIndex" })
  startIndex?: number;
}
