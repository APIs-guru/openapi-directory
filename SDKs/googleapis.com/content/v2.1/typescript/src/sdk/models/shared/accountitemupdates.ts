import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountItemUpdatesSettings } from "./accountitemupdatessettings";



// AccountItemUpdatesInput
/** 
 * Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown.
**/
export class AccountItemUpdatesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountItemUpdatesSettings" })
  accountItemUpdatesSettings?: AccountItemUpdatesSettings;
}


// AccountItemUpdates
/** 
 * Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown.
**/
export class AccountItemUpdates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountItemUpdatesSettings" })
  accountItemUpdatesSettings?: AccountItemUpdatesSettings;

  @SpeakeasyMetadata({ data: "json, name=effectiveAllowAvailabilityUpdates" })
  effectiveAllowAvailabilityUpdates?: boolean;

  @SpeakeasyMetadata({ data: "json, name=effectiveAllowConditionUpdates" })
  effectiveAllowConditionUpdates?: boolean;

  @SpeakeasyMetadata({ data: "json, name=effectiveAllowPriceUpdates" })
  effectiveAllowPriceUpdates?: boolean;

  @SpeakeasyMetadata({ data: "json, name=effectiveAllowStrictAvailabilityUpdates" })
  effectiveAllowStrictAvailabilityUpdates?: boolean;
}
