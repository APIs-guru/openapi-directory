import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateItemResponse
/** 
 * The result of creating an item.
**/
export class CreateItemResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=itemId" })
  itemId?: string;

  @Metadata({ data: "json, name=questionId" })
  questionId?: string[];
}
