import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FilterList
/** 
 * List of infoTypes to be filtered.
**/
export class FilterList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=infoTypes" })
  infoTypes?: string[];
}
