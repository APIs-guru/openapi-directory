import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAdsHomeservicesLocalservicesV1BookingLead
/** 
 * Container for booking lead specific information.
**/
export class GoogleAdsHomeservicesLocalservicesV1BookingLead extends SpeakeasyBase {
  @Metadata({ data: "json, name=bookingAppointmentTimestamp" })
  bookingAppointmentTimestamp?: string;

  @Metadata({ data: "json, name=consumerEmail" })
  consumerEmail?: string;

  @Metadata({ data: "json, name=consumerPhoneNumber" })
  consumerPhoneNumber?: string;

  @Metadata({ data: "json, name=customerName" })
  customerName?: string;

  @Metadata({ data: "json, name=jobType" })
  jobType?: string;
}
