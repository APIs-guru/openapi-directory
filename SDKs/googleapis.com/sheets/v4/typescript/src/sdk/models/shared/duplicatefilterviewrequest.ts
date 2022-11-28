import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DuplicateFilterViewRequest
/** 
 * Duplicates a particular filter view.
**/
export class DuplicateFilterViewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterId" })
  filterId?: number;
}
