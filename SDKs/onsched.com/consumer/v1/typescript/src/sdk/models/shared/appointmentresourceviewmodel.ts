import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppointmentResourceViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appointmentId" })
  appointmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: string;
}
