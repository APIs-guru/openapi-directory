import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutConsumerV1AppointmentsIdCancelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutConsumerV1AppointmentsIdCancelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutConsumerV1AppointmentsIdCancelPathParams;
}


export class PutConsumerV1AppointmentsIdCancelResponse extends SpeakeasyBase {
  @Metadata()
  appointmentViewModel?: shared.AppointmentViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
