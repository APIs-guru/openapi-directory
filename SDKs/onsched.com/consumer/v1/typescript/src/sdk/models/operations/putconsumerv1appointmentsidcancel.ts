import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutConsumerV1AppointmentsIdCancelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutConsumerV1AppointmentsIdCancelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutConsumerV1AppointmentsIdCancelPathParams;
}


export class PutConsumerV1AppointmentsIdCancelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  appointmentViewModel?: shared.AppointmentViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
