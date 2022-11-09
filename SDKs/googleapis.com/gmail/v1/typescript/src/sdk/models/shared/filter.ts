import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FilterAction } from "./filteraction";
import { FilterCriteria } from "./filtercriteria";


// Filter
/** 
 * Resource definition for Gmail filters. Filters apply to specific messages instead of an entire email thread.
**/
export class Filter extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: FilterAction;

  @Metadata({ data: "json, name=criteria" })
  criteria?: FilterCriteria;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
