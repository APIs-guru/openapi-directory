import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountItemUpdatesSettings
/** 
 * Settings for the Automatic Item Updates.
**/
export class AccountItemUpdatesSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowAvailabilityUpdates" })
  allowAvailabilityUpdates?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowConditionUpdates" })
  allowConditionUpdates?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowPriceUpdates" })
  allowPriceUpdates?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowStrictAvailabilityUpdates" })
  allowStrictAvailabilityUpdates?: boolean;
}
