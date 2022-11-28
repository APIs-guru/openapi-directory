import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterView } from "./filterview";



// AddFilterViewResponse
/** 
 * The result of adding a filter view.
**/
export class AddFilterViewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: FilterView;
}
