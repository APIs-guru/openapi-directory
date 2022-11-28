import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionRange } from "./dimensionrange";



// MoveDimensionRequest
/** 
 * Moves one or more rows or columns.
**/
export class MoveDimensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationIndex" })
  destinationIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: DimensionRange;
}
