import { SpeakeasyBase } from "../../../internal/utils";
import { AccountImageImprovementsInput } from "./accountimageimprovements";
import { AccountItemUpdatesInput } from "./accountitemupdates";
import { AccountShippingImprovements } from "./accountshippingimprovements";
import { AccountImageImprovements } from "./accountimageimprovements";
import { AccountItemUpdates } from "./accountitemupdates";
/**
 * The automatic improvements of the account can be used to automatically update items, improve images and shipping.
**/
export declare class AccountAutomaticImprovementsInput extends SpeakeasyBase {
    imageImprovements?: AccountImageImprovementsInput;
    itemUpdates?: AccountItemUpdatesInput;
    shippingImprovements?: AccountShippingImprovements;
}
/**
 * The automatic improvements of the account can be used to automatically update items, improve images and shipping.
**/
export declare class AccountAutomaticImprovements extends SpeakeasyBase {
    imageImprovements?: AccountImageImprovements;
    itemUpdates?: AccountItemUpdates;
    shippingImprovements?: AccountShippingImprovements;
}
