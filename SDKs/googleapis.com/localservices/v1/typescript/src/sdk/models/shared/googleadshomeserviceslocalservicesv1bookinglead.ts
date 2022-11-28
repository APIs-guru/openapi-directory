import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAdsHomeservicesLocalservicesV1BookingLead
/** 
 * Container for booking lead specific information.
**/
export class GoogleAdsHomeservicesLocalservicesV1BookingLead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bookingAppointmentTimestamp" })
  bookingAppointmentTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=consumerEmail" })
  consumerEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=consumerPhoneNumber" })
  consumerPhoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=customerName" })
  customerName?: string;

  @SpeakeasyMetadata({ data: "json, name=jobType" })
  jobType?: string;
}
