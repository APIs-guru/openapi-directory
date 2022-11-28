import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterView } from "./filterview";



// UpdateFilterViewRequest
/** 
 * Updates properties of the filter view.
**/
export class UpdateFilterViewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: FilterView;
}
