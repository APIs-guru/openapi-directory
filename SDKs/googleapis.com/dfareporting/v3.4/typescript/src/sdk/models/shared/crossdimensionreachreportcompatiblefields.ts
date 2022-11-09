import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";
import { Metric } from "./metric";
import { Metric } from "./metric";


// CrossDimensionReachReportCompatibleFields
/** 
 * Represents fields that are compatible to be selected for a report of type "CROSS_DIMENSION_REACH".
**/
export class CrossDimensionReachReportCompatibleFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=breakdown", elemType: shared.Dimension })
  breakdown?: Dimension[];

  @Metadata({ data: "json, name=dimensionFilters", elemType: shared.Dimension })
  dimensionFilters?: Dimension[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=metrics", elemType: shared.Metric })
  metrics?: Metric[];

  @Metadata({ data: "json, name=overlapMetrics", elemType: shared.Metric })
  overlapMetrics?: Metric[];
}
