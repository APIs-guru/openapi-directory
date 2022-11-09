import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PathQueryOptionsFilter } from "./pathqueryoptionsfilter";


// EventFilter
/** 
 * Defines the type of filter to be applied to the path, a DV360 event dimension filter.
**/
export class EventFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionFilter" })
  dimensionFilter?: PathQueryOptionsFilter;
}
