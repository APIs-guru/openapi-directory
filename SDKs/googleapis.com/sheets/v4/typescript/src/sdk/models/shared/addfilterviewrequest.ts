import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterView } from "./filterview";



// AddFilterViewRequest
/** 
 * Adds a filter view.
**/
export class AddFilterViewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: FilterView;
}
