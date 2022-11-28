import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PathQueryOptionsFilter } from "./pathqueryoptionsfilter";



// EventFilter
/** 
 * Defines the type of filter to be applied to the path, a DV360 event dimension filter.
**/
export class EventFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionFilter" })
  dimensionFilter?: PathQueryOptionsFilter;
}
