import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppointmentCustomerViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appointmentId" })
  appointmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;
}
