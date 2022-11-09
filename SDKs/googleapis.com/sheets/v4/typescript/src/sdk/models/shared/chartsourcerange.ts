import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GridRange } from "./gridrange";


// ChartSourceRange
/** 
 * Source ranges for a chart.
**/
export class ChartSourceRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=sources", elemType: shared.GridRange })
  sources?: GridRange[];
}
