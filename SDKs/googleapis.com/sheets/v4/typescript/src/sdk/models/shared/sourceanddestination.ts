import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";


export enum SourceAndDestinationDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Rows = "ROWS",
    Columns = "COLUMNS"
}


// SourceAndDestination
/** 
 * A combination of a source range and how to extend that source.
**/
export class SourceAndDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: SourceAndDestinationDimensionEnum;

  @SpeakeasyMetadata({ data: "json, name=fillLength" })
  fillLength?: number;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: GridRange;
}
