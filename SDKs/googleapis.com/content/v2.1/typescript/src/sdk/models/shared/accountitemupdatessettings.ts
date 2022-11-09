import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccountItemUpdatesSettings
/** 
 * Settings for the Automatic Item Updates.
**/
export class AccountItemUpdatesSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowAvailabilityUpdates" })
  allowAvailabilityUpdates?: boolean;

  @Metadata({ data: "json, name=allowConditionUpdates" })
  allowConditionUpdates?: boolean;

  @Metadata({ data: "json, name=allowPriceUpdates" })
  allowPriceUpdates?: boolean;

  @Metadata({ data: "json, name=allowStrictAvailabilityUpdates" })
  allowStrictAvailabilityUpdates?: boolean;
}
