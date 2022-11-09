import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountItemUpdatesSettings } from "./accountitemupdatessettings";


// AccountItemUpdates
/** 
 * Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown.
**/
export class AccountItemUpdates extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountItemUpdatesSettings" })
  accountItemUpdatesSettings?: AccountItemUpdatesSettings;

  @Metadata({ data: "json, name=effectiveAllowAvailabilityUpdates" })
  effectiveAllowAvailabilityUpdates?: boolean;

  @Metadata({ data: "json, name=effectiveAllowConditionUpdates" })
  effectiveAllowConditionUpdates?: boolean;

  @Metadata({ data: "json, name=effectiveAllowPriceUpdates" })
  effectiveAllowPriceUpdates?: boolean;

  @Metadata({ data: "json, name=effectiveAllowStrictAvailabilityUpdates" })
  effectiveAllowStrictAvailabilityUpdates?: boolean;
}
