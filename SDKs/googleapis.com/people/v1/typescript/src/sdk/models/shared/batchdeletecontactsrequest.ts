import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchDeleteContactsRequest
/** 
 * A request to delete a batch of existing contacts.
**/
export class BatchDeleteContactsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceNames" })
  resourceNames?: string[];
}
