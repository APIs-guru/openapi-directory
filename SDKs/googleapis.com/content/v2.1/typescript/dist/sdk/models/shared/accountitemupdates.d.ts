import { SpeakeasyBase } from "../../../internal/utils";
import { AccountItemUpdatesSettings } from "./accountitemupdatessettings";
/**
 * Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown.
**/
export declare class AccountItemUpdatesInput extends SpeakeasyBase {
    accountItemUpdatesSettings?: AccountItemUpdatesSettings;
}
/**
 * Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown.
**/
export declare class AccountItemUpdates extends SpeakeasyBase {
    accountItemUpdatesSettings?: AccountItemUpdatesSettings;
    effectiveAllowAvailabilityUpdates?: boolean;
    effectiveAllowConditionUpdates?: boolean;
    effectiveAllowPriceUpdates?: boolean;
    effectiveAllowStrictAvailabilityUpdates?: boolean;
}
