import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionRange } from "./dimensionrange";


// MoveDimensionRequest
/** 
 * Moves one or more rows or columns.
**/
export class MoveDimensionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationIndex" })
  destinationIndex?: number;

  @Metadata({ data: "json, name=source" })
  source?: DimensionRange;
}
