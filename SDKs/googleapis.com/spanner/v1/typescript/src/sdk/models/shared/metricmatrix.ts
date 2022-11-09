import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricMatrixRow } from "./metricmatrixrow";


// MetricMatrix
/** 
 * A message representing a matrix of floats.
**/
export class MetricMatrix extends SpeakeasyBase {
  @Metadata({ data: "json, name=rows", elemType: shared.MetricMatrixRow })
  rows?: MetricMatrixRow[];
}
