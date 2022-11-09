import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Filter } from "./filter";


// ListFiltersResponse
/** 
 * Response for the ListFilters method.
**/
export class ListFiltersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter", elemType: shared.Filter })
  filter?: Filter[];
}
