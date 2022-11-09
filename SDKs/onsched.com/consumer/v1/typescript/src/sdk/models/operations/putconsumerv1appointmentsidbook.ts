import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutConsumerV1AppointmentsIdBookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutConsumerV1AppointmentsIdBookRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  appointmentBookModel?: shared.AppointmentBookModel;

  @Metadata({ data: "request, media_type=application/json" })
  appointmentBookModel1?: shared.AppointmentBookModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  appointmentBookModel2?: shared.AppointmentBookModel;

  @Metadata({ data: "request, media_type=text/json" })
  appointmentBookModel3?: shared.AppointmentBookModel;
}


export class PutConsumerV1AppointmentsIdBookRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutConsumerV1AppointmentsIdBookPathParams;

  @Metadata()
  request?: PutConsumerV1AppointmentsIdBookRequests;
}


export class PutConsumerV1AppointmentsIdBookResponse extends SpeakeasyBase {
  @Metadata()
  appointmentViewModel?: shared.AppointmentViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
