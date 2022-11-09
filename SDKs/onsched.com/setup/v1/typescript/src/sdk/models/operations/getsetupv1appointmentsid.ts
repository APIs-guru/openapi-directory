import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1AppointmentsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1AppointmentsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1AppointmentsIdPathParams;
}


export class GetSetupV1AppointmentsIdResponse extends SpeakeasyBase {
  @Metadata()
  appointmentViewModel?: shared.AppointmentViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
