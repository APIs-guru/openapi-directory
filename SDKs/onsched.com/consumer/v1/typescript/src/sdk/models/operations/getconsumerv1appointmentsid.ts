import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConsumerV1AppointmentsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetConsumerV1AppointmentsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConsumerV1AppointmentsIdPathParams;
}


export class GetConsumerV1AppointmentsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  appointmentViewModel?: shared.AppointmentViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
