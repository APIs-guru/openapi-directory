import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OnlineSettingsInputModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=bookAheadUnit" })
  bookAheadUnit?: number;

  @Metadata({ data: "json, name=bookAheadValue" })
  bookAheadValue?: number;

  @Metadata({ data: "json, name=bookInAdvance" })
  bookInAdvance?: number;

  @Metadata({ data: "json, name=bookingTimerMins" })
  bookingTimerMins?: number;

  @Metadata({ data: "json, name=customerBookingsPerDay" })
  customerBookingsPerDay?: number;

  @Metadata({ data: "json, name=enableWorldTimezones" })
  enableWorldTimezones?: boolean;
}
