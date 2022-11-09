import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FilterView } from "./filterview";


// AddFilterViewResponse
/** 
 * The result of adding a filter view.
**/
export class AddFilterViewResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: FilterView;
}
