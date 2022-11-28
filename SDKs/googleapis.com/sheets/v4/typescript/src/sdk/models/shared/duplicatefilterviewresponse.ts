import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterView } from "./filterview";



// DuplicateFilterViewResponse
/** 
 * The result of a filter view being duplicated.
**/
export class DuplicateFilterViewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: FilterView;
}
