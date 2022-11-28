import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";



// FilterOptions
/** 
 * Filter options to be applied on query.
**/
export class FilterOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: Filter;

  @SpeakeasyMetadata({ data: "json, name=objectType" })
  objectType?: string;
}
