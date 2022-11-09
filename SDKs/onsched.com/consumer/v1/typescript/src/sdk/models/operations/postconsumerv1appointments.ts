import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostConsumerV1AppointmentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=completeBooking" })
  completeBooking?: string;
}


export class PostConsumerV1AppointmentsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  appointmentInitialModel?: shared.AppointmentInitialModel;

  @Metadata({ data: "request, media_type=application/json" })
  appointmentInitialModel1?: shared.AppointmentInitialModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  appointmentInitialModel2?: shared.AppointmentInitialModel;

  @Metadata({ data: "request, media_type=text/json" })
  appointmentInitialModel3?: shared.AppointmentInitialModel;
}


export class PostConsumerV1AppointmentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostConsumerV1AppointmentsQueryParams;

  @Metadata()
  request?: PostConsumerV1AppointmentsRequests;
}


export class PostConsumerV1AppointmentsResponse extends SpeakeasyBase {
  @Metadata()
  appointmentInitialViewModel?: shared.AppointmentInitialViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
