import { SpeakeasyBase } from "../../../internal/utils";
import { ItemInput } from "./item";
import { Location } from "./location";
/**
 * Create an item in a form.
**/
export declare class CreateItemRequestInput extends SpeakeasyBase {
    item?: ItemInput;
    location?: Location;
}
