import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterAction } from "./filteraction";
import { FilterCriteria } from "./filtercriteria";



// Filter
/** 
 * Resource definition for Gmail filters. Filters apply to specific messages instead of an entire email thread.
**/
export class Filter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: FilterAction;

  @SpeakeasyMetadata({ data: "json, name=criteria" })
  criteria?: FilterCriteria;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
