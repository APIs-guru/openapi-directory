import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FilterView } from "./filterview";


// UpdateFilterViewRequest
/** 
 * Updates properties of the filter view.
**/
export class UpdateFilterViewRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=filter" })
  filter?: FilterView;
}
