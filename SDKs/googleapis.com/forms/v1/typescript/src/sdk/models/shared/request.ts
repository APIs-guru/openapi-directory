import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreateItemRequest } from "./createitemrequest";
import { DeleteItemRequest } from "./deleteitemrequest";
import { MoveItemRequest } from "./moveitemrequest";
import { UpdateFormInfoRequest } from "./updateforminforequest";
import { UpdateItemRequest } from "./updateitemrequest";
import { UpdateSettingsRequest } from "./updatesettingsrequest";


// Request
/** 
 * The kinds of update requests that can be made.
**/
export class Request extends SpeakeasyBase {
  @Metadata({ data: "json, name=createItem" })
  createItem?: CreateItemRequest;

  @Metadata({ data: "json, name=deleteItem" })
  deleteItem?: DeleteItemRequest;

  @Metadata({ data: "json, name=moveItem" })
  moveItem?: MoveItemRequest;

  @Metadata({ data: "json, name=updateFormInfo" })
  updateFormInfo?: UpdateFormInfoRequest;

  @Metadata({ data: "json, name=updateItem" })
  updateItem?: UpdateItemRequest;

  @Metadata({ data: "json, name=updateSettings" })
  updateSettings?: UpdateSettingsRequest;
}
