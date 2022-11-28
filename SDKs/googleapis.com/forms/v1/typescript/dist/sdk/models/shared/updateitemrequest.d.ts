import { SpeakeasyBase } from "../../../internal/utils";
import { ItemInput } from "./item";
import { Location } from "./location";
/**
 * Update an item in a form.
**/
export declare class UpdateItemRequestInput extends SpeakeasyBase {
    item?: ItemInput;
    location?: Location;
    updateMask?: string;
}
