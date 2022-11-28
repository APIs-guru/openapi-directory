import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";



// ChartSourceRange
/** 
 * Source ranges for a chart.
**/
export class ChartSourceRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sources", elemType: GridRange })
  sources?: GridRange[];
}
