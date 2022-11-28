import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { Metric } from "./metric";



// FloodlightReportCompatibleFields
/** 
 * Represents fields that are compatible to be selected for a report of type "FlOODLIGHT".
**/
export class FloodlightReportCompatibleFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionFilters", elemType: Dimension })
  dimensionFilters?: Dimension[];

  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: Dimension })
  dimensions?: Dimension[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: Metric })
  metrics?: Metric[];
}
