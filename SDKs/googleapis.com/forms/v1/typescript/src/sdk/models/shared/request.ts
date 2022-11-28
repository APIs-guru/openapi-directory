import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateItemRequestInput } from "./createitemrequest";
import { DeleteItemRequest } from "./deleteitemrequest";
import { MoveItemRequest } from "./moveitemrequest";
import { UpdateFormInfoRequestInput } from "./updateforminforequest";
import { UpdateItemRequestInput } from "./updateitemrequest";
import { UpdateSettingsRequest } from "./updatesettingsrequest";



// RequestInput
/** 
 * The kinds of update requests that can be made.
**/
export class RequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createItem" })
  createItem?: CreateItemRequestInput;

  @SpeakeasyMetadata({ data: "json, name=deleteItem" })
  deleteItem?: DeleteItemRequest;

  @SpeakeasyMetadata({ data: "json, name=moveItem" })
  moveItem?: MoveItemRequest;

  @SpeakeasyMetadata({ data: "json, name=updateFormInfo" })
  updateFormInfo?: UpdateFormInfoRequestInput;

  @SpeakeasyMetadata({ data: "json, name=updateItem" })
  updateItem?: UpdateItemRequestInput;

  @SpeakeasyMetadata({ data: "json, name=updateSettings" })
  updateSettings?: UpdateSettingsRequest;
}
