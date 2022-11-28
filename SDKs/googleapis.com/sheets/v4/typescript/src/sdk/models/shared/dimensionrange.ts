import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DimensionRangeDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Rows = "ROWS",
    Columns = "COLUMNS"
}


// DimensionRange
/** 
 * A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side.
**/
export class DimensionRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: DimensionRangeDimensionEnum;

  @SpeakeasyMetadata({ data: "json, name=endIndex" })
  endIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=sheetId" })
  sheetId?: number;

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex?: number;
}
