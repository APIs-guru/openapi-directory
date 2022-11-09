import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FilterView } from "./filterview";


// AddFilterViewRequest
/** 
 * Adds a filter view.
**/
export class AddFilterViewRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: FilterView;
}
