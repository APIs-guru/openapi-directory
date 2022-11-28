import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchDeleteContactsRequest
/** 
 * A request to delete a batch of existing contacts.
**/
export class BatchDeleteContactsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceNames" })
  resourceNames?: string[];
}
