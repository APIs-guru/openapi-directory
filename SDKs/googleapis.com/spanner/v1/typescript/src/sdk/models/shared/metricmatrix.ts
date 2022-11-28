import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricMatrixRow } from "./metricmatrixrow";



// MetricMatrix
/** 
 * A message representing a matrix of floats.
**/
export class MetricMatrix extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rows", elemType: MetricMatrixRow })
  rows?: MetricMatrixRow[];
}
