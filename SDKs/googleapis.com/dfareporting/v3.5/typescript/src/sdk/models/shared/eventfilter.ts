import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PathReportDimensionValue } from "./pathreportdimensionvalue";



// EventFilter
/** 
 * Represents a DfaReporting event filter.
**/
export class EventFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionFilter" })
  dimensionFilter?: PathReportDimensionValue;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
