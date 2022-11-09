import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";
import { Metric } from "./metric";
import { Metric } from "./metric";
import { Metric } from "./metric";


// ReachReportCompatibleFields
/** 
 * Represents fields that are compatible to be selected for a report of type "REACH".
**/
export class ReachReportCompatibleFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionFilters", elemType: shared.Dimension })
  dimensionFilters?: Dimension[];

  @Metadata({ data: "json, name=dimensions", elemType: shared.Dimension })
  dimensions?: Dimension[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=metrics", elemType: shared.Metric })
  metrics?: Metric[];

  @Metadata({ data: "json, name=pivotedActivityMetrics", elemType: shared.Metric })
  pivotedActivityMetrics?: Metric[];

  @Metadata({ data: "json, name=reachByFrequencyMetrics", elemType: shared.Metric })
  reachByFrequencyMetrics?: Metric[];
}
