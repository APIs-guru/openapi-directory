import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";
import { Metric } from "./metric";


// FloodlightReportCompatibleFields
/** 
 * Represents fields that are compatible to be selected for a report of type "FlOODLIGHT".
**/
export class FloodlightReportCompatibleFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionFilters", elemType: shared.Dimension })
  dimensionFilters?: Dimension[];

  @Metadata({ data: "json, name=dimensions", elemType: shared.Dimension })
  dimensions?: Dimension[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=metrics", elemType: shared.Metric })
  metrics?: Metric[];
}
