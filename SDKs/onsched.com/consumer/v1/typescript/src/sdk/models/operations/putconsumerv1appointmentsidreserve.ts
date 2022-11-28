import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutConsumerV1AppointmentsIdReservePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutConsumerV1AppointmentsIdReserveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sendNotifications" })
  sendNotifications?: boolean;
}


export class PutConsumerV1AppointmentsIdReserveRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  appointmentReserveModel?: shared.AppointmentReserveModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  appointmentReserveModel1?: shared.AppointmentReserveModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  appointmentReserveModel2?: shared.AppointmentReserveModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  appointmentReserveModel3?: shared.AppointmentReserveModel;
}


export class PutConsumerV1AppointmentsIdReserveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutConsumerV1AppointmentsIdReservePathParams;

  @SpeakeasyMetadata()
  queryParams: PutConsumerV1AppointmentsIdReserveQueryParams;

  @SpeakeasyMetadata()
  request?: PutConsumerV1AppointmentsIdReserveRequests;
}


export class PutConsumerV1AppointmentsIdReserveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
