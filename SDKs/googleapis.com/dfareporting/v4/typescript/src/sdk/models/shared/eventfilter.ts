import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PathReportDimensionValue } from "./pathreportdimensionvalue";
import { UvarFilter } from "./uvarfilter";


// EventFilter
/** 
 * Represents a DfaReporting event filter.
**/
export class EventFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionFilter" })
  dimensionFilter?: PathReportDimensionValue;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=uvarFilter" })
  uvarFilter?: UvarFilter;
}
