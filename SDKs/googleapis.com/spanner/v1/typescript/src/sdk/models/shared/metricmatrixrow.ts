import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetricMatrixRow
/** 
 * A message representing a row of a matrix of floats.
**/
export class MetricMatrixRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cols" })
  cols?: number[];
}
