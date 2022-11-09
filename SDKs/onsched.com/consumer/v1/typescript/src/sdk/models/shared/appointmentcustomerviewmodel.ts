import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AppointmentCustomerViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=appointmentId" })
  appointmentId?: string;

  @Metadata({ data: "json, name=customerId" })
  customerId?: string;
}
