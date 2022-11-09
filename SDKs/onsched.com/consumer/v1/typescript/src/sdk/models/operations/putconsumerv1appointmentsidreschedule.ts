import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutConsumerV1AppointmentsIdReschedulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutConsumerV1AppointmentsIdRescheduleRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  appointmentRescheduleModel?: shared.AppointmentRescheduleModel;

  @Metadata({ data: "request, media_type=application/json" })
  appointmentRescheduleModel1?: shared.AppointmentRescheduleModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  appointmentRescheduleModel2?: shared.AppointmentRescheduleModel;

  @Metadata({ data: "request, media_type=text/json" })
  appointmentRescheduleModel3?: shared.AppointmentRescheduleModel;
}


export class PutConsumerV1AppointmentsIdRescheduleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutConsumerV1AppointmentsIdReschedulePathParams;

  @Metadata()
  request?: PutConsumerV1AppointmentsIdRescheduleRequests;
}


export class PutConsumerV1AppointmentsIdRescheduleResponse extends SpeakeasyBase {
  @Metadata()
  appointmentViewModel?: shared.AppointmentViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
