import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetricMatrixRow
/** 
 * A message representing a row of a matrix of floats.
**/
export class MetricMatrixRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=cols" })
  cols?: number[];
}
