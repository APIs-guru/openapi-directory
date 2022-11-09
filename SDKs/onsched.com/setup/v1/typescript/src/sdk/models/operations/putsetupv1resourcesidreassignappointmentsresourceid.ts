import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1ResourcesIdReassignAppointmentsResourceIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=resourceId" })
  resourceId: string;
}


export class PutSetupV1ResourcesIdReassignAppointmentsResourceIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=calendarId" })
  calendarId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: Date;
}


export class PutSetupV1ResourcesIdReassignAppointmentsResourceIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSetupV1ResourcesIdReassignAppointmentsResourceIdPathParams;

  @Metadata()
  queryParams: PutSetupV1ResourcesIdReassignAppointmentsResourceIdQueryParams;
}


export class PutSetupV1ResourcesIdReassignAppointmentsResourceIdResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AppointmentViewModel })
  appointmentViewModels?: shared.AppointmentViewModel[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
