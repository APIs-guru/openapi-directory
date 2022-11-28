import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteFilterViewRequest
/** 
 * Deletes a particular filter view.
**/
export class DeleteFilterViewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterId" })
  filterId?: number;
}
