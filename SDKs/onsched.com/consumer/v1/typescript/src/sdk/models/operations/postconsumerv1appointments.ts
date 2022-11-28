import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostConsumerV1AppointmentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=completeBooking" })
  completeBooking?: string;
}


export class PostConsumerV1AppointmentsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  appointmentInitialModel?: shared.AppointmentInitialModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  appointmentInitialModel1?: shared.AppointmentInitialModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  appointmentInitialModel2?: shared.AppointmentInitialModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  appointmentInitialModel3?: shared.AppointmentInitialModel;
}


export class PostConsumerV1AppointmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostConsumerV1AppointmentsQueryParams;

  @SpeakeasyMetadata()
  request?: PostConsumerV1AppointmentsRequests;
}


export class PostConsumerV1AppointmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  appointmentInitialViewModel?: shared.AppointmentInitialViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
