import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Filter } from "./filter";


// FilterOptions
/** 
 * Filter options to be applied on query.
**/
export class FilterOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: Filter;

  @Metadata({ data: "json, name=objectType" })
  objectType?: string;
}
