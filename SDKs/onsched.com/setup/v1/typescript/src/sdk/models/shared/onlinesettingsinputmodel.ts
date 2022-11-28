import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OnlineSettingsInputModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bookAheadUnit" })
  bookAheadUnit?: number;

  @SpeakeasyMetadata({ data: "json, name=bookAheadValue" })
  bookAheadValue?: number;

  @SpeakeasyMetadata({ data: "json, name=bookInAdvance" })
  bookInAdvance?: number;

  @SpeakeasyMetadata({ data: "json, name=bookingTimerMins" })
  bookingTimerMins?: number;

  @SpeakeasyMetadata({ data: "json, name=customerBookingsPerDay" })
  customerBookingsPerDay?: number;

  @SpeakeasyMetadata({ data: "json, name=enableWorldTimezones" })
  enableWorldTimezones?: boolean;
}
