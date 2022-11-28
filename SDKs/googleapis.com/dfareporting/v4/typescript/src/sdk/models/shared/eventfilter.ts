import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PathReportDimensionValue } from "./pathreportdimensionvalue";
import { UvarFilter } from "./uvarfilter";



// EventFilter
/** 
 * Represents a DfaReporting event filter.
**/
export class EventFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionFilter" })
  dimensionFilter?: PathReportDimensionValue;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=uvarFilter" })
  uvarFilter?: UvarFilter;
}
