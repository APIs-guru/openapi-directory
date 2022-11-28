import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateItemResponse
/** 
 * The result of creating an item.
**/
export class CreateItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=questionId" })
  questionId?: string[];
}
