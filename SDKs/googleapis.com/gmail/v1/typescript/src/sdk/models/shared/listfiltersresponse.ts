import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";



// ListFiltersResponse
/** 
 * Response for the ListFilters method.
**/
export class ListFiltersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter", elemType: Filter })
  filter?: Filter[];
}
