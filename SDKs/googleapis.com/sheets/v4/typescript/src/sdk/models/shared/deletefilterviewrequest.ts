import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteFilterViewRequest
/** 
 * Deletes a particular filter view.
**/
export class DeleteFilterViewRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filterId" })
  filterId?: number;
}
