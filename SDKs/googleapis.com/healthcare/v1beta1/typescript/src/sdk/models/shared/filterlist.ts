import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FilterList
/** 
 * List of infoTypes to be filtered.
**/
export class FilterList extends SpeakeasyBase {
  @Metadata({ data: "json, name=infoTypes" })
  infoTypes?: string[];
}
