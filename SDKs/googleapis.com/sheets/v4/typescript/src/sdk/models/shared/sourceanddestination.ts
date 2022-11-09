import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GridRange } from "./gridrange";

export enum SourceAndDestinationDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED"
,    Rows = "ROWS"
,    Columns = "COLUMNS"
}


// SourceAndDestination
/** 
 * A combination of a source range and how to extend that source.
**/
export class SourceAndDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimension" })
  dimension?: SourceAndDestinationDimensionEnum;

  @Metadata({ data: "json, name=fillLength" })
  fillLength?: number;

  @Metadata({ data: "json, name=source" })
  source?: GridRange;
}
