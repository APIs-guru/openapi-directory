import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteConsumerV1AppointmentsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteConsumerV1AppointmentsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteConsumerV1AppointmentsIdPathParams;
}


export class DeleteConsumerV1AppointmentsIdResponse extends SpeakeasyBase {
  @Metadata()
  appointmentViewModel?: shared.AppointmentViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
