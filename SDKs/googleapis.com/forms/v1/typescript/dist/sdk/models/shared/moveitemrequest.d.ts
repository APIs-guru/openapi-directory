import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * Move an item in a form.
**/
export declare class MoveItemRequest extends SpeakeasyBase {
    newLocation?: Location;
    originalLocation?: Location;
}
