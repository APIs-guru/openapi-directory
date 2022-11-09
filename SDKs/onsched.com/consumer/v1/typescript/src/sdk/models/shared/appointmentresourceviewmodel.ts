import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AppointmentResourceViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=appointmentId" })
  appointmentId?: string;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: string;
}
