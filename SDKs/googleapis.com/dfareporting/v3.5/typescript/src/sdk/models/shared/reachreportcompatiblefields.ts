import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { Metric } from "./metric";



// ReachReportCompatibleFields
/** 
 * Represents fields that are compatible to be selected for a report of type "REACH".
**/
export class ReachReportCompatibleFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionFilters", elemType: Dimension })
  dimensionFilters?: Dimension[];

  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: Dimension })
  dimensions?: Dimension[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: Metric })
  metrics?: Metric[];

  @SpeakeasyMetadata({ data: "json, name=pivotedActivityMetrics", elemType: Metric })
  pivotedActivityMetrics?: Metric[];

  @SpeakeasyMetadata({ data: "json, name=reachByFrequencyMetrics", elemType: Metric })
  reachByFrequencyMetrics?: Metric[];
}
