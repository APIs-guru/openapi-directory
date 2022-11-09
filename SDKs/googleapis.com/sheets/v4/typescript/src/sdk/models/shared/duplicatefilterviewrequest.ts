import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DuplicateFilterViewRequest
/** 
 * Duplicates a particular filter view.
**/
export class DuplicateFilterViewRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filterId" })
  filterId?: number;
}
