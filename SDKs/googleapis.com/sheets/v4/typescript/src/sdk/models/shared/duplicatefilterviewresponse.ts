import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FilterView } from "./filterview";


// DuplicateFilterViewResponse
/** 
 * The result of a filter view being duplicated.
**/
export class DuplicateFilterViewResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: FilterView;
}
