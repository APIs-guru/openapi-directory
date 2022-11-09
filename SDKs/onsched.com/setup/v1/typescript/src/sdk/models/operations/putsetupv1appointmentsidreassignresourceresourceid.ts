import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1AppointmentsIdReassignResourceResourceIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=resourceId" })
  resourceId: string;
}


export class PutSetupV1AppointmentsIdReassignResourceResourceIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSetupV1AppointmentsIdReassignResourceResourceIdPathParams;
}


export class PutSetupV1AppointmentsIdReassignResourceResourceIdResponse extends SpeakeasyBase {
  @Metadata()
  appointmentViewModel?: shared.AppointmentViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
