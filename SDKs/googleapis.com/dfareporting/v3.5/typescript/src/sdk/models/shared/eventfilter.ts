import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PathReportDimensionValue } from "./pathreportdimensionvalue";


// EventFilter
/** 
 * Represents a DfaReporting event filter.
**/
export class EventFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionFilter" })
  dimensionFilter?: PathReportDimensionValue;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
