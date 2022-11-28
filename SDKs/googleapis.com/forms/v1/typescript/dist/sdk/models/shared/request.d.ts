import { SpeakeasyBase } from "../../../internal/utils";
import { CreateItemRequestInput } from "./createitemrequest";
import { DeleteItemRequest } from "./deleteitemrequest";
import { MoveItemRequest } from "./moveitemrequest";
import { UpdateFormInfoRequestInput } from "./updateforminforequest";
import { UpdateItemRequestInput } from "./updateitemrequest";
import { UpdateSettingsRequest } from "./updatesettingsrequest";
/**
 * The kinds of update requests that can be made.
**/
export declare class RequestInput extends SpeakeasyBase {
    createItem?: CreateItemRequestInput;
    deleteItem?: DeleteItemRequest;
    moveItem?: MoveItemRequest;
    updateFormInfo?: UpdateFormInfoRequestInput;
    updateItem?: UpdateItemRequestInput;
    updateSettings?: UpdateSettingsRequest;
}
