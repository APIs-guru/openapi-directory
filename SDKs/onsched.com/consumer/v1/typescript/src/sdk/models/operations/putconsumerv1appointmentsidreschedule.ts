import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutConsumerV1AppointmentsIdReschedulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutConsumerV1AppointmentsIdRescheduleRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  appointmentRescheduleModel?: shared.AppointmentRescheduleModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  appointmentRescheduleModel1?: shared.AppointmentRescheduleModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  appointmentRescheduleModel2?: shared.AppointmentRescheduleModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  appointmentRescheduleModel3?: shared.AppointmentRescheduleModel;
}


export class PutConsumerV1AppointmentsIdRescheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutConsumerV1AppointmentsIdReschedulePathParams;

  @SpeakeasyMetadata()
  request?: PutConsumerV1AppointmentsIdRescheduleRequests;
}


export class PutConsumerV1AppointmentsIdRescheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  appointmentViewModel?: shared.AppointmentViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
