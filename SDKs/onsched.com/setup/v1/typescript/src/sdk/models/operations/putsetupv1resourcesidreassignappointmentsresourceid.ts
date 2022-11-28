import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSetupV1ResourcesIdReassignAppointmentsResourceIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceId" })
  resourceId: string;
}


export class PutSetupV1ResourcesIdReassignAppointmentsResourceIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=calendarId" })
  calendarId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: Date;
}


export class PutSetupV1ResourcesIdReassignAppointmentsResourceIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSetupV1ResourcesIdReassignAppointmentsResourceIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PutSetupV1ResourcesIdReassignAppointmentsResourceIdQueryParams;
}


export class PutSetupV1ResourcesIdReassignAppointmentsResourceIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AppointmentViewModel })
  appointmentViewModels?: shared.AppointmentViewModel[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
