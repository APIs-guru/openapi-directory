import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { Metric } from "./metric";



// CrossDimensionReachReportCompatibleFields
/** 
 * Represents fields that are compatible to be selected for a report of type "CROSS_DIMENSION_REACH".
**/
export class CrossDimensionReachReportCompatibleFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=breakdown", elemType: Dimension })
  breakdown?: Dimension[];

  @SpeakeasyMetadata({ data: "json, name=dimensionFilters", elemType: Dimension })
  dimensionFilters?: Dimension[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: Metric })
  metrics?: Metric[];

  @SpeakeasyMetadata({ data: "json, name=overlapMetrics", elemType: Metric })
  overlapMetrics?: Metric[];
}
