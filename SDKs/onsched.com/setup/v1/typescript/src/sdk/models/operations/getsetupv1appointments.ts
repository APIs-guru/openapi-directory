import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSetupV1AppointmentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=bookedBy" })
  bookedBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=calendarId" })
  calendarId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=customerId" })
  customerId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lastname" })
  lastname?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceAllocationId" })
  serviceAllocationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceId" })
  serviceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;
}


export class GetSetupV1AppointmentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSetupV1AppointmentsQueryParams;
}


export class GetSetupV1AppointmentsResponse extends SpeakeasyBase {
  @Metadata()
  appointmentListViewModel?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
