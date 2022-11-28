import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutConsumerV1AppointmentsIdBookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutConsumerV1AppointmentsIdBookRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  appointmentBookModel?: shared.AppointmentBookModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  appointmentBookModel1?: shared.AppointmentBookModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  appointmentBookModel2?: shared.AppointmentBookModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  appointmentBookModel3?: shared.AppointmentBookModel;
}


export class PutConsumerV1AppointmentsIdBookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutConsumerV1AppointmentsIdBookPathParams;

  @SpeakeasyMetadata()
  request?: PutConsumerV1AppointmentsIdBookRequests;
}


export class PutConsumerV1AppointmentsIdBookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  appointmentViewModel?: shared.AppointmentViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
