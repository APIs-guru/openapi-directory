import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConsumerV1AppointmentsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetConsumerV1AppointmentsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConsumerV1AppointmentsIdPathParams;
}


export class GetConsumerV1AppointmentsIdResponse extends SpeakeasyBase {
  @Metadata()
  appointmentViewModel?: shared.AppointmentViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
