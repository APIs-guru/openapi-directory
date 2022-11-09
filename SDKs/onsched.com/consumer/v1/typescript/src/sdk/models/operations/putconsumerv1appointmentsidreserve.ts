import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutConsumerV1AppointmentsIdReservePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutConsumerV1AppointmentsIdReserveQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=sendNotifications" })
  sendNotifications?: boolean;
}


export class PutConsumerV1AppointmentsIdReserveRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  appointmentReserveModel?: shared.AppointmentReserveModel;

  @Metadata({ data: "request, media_type=application/json" })
  appointmentReserveModel1?: shared.AppointmentReserveModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  appointmentReserveModel2?: shared.AppointmentReserveModel;

  @Metadata({ data: "request, media_type=text/json" })
  appointmentReserveModel3?: shared.AppointmentReserveModel;
}


export class PutConsumerV1AppointmentsIdReserveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutConsumerV1AppointmentsIdReservePathParams;

  @Metadata()
  queryParams: PutConsumerV1AppointmentsIdReserveQueryParams;

  @Metadata()
  request?: PutConsumerV1AppointmentsIdReserveRequests;
}


export class PutConsumerV1AppointmentsIdReserveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
