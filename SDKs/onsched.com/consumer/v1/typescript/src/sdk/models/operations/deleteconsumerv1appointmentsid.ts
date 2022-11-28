import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteConsumerV1AppointmentsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteConsumerV1AppointmentsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteConsumerV1AppointmentsIdPathParams;
}


export class DeleteConsumerV1AppointmentsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  appointmentViewModel?: shared.AppointmentViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
