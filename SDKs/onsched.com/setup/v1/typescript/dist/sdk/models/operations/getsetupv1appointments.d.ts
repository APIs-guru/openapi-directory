import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSetupV1AppointmentsQueryParams extends SpeakeasyBase {
    bookedBy?: string;
    calendarId?: string;
    customerId?: string;
    email?: string;
    endDate?: Date;
    lastname?: string;
    limit?: number;
    locationId?: string;
    offset?: number;
    resourceId?: string;
    serviceAllocationId?: string;
    serviceId?: string;
    startDate?: Date;
    status?: string;
}
export declare class GetSetupV1AppointmentsRequest extends SpeakeasyBase {
    queryParams: GetSetupV1AppointmentsQueryParams;
}
export declare class GetSetupV1AppointmentsResponse extends SpeakeasyBase {
    appointmentListViewModel?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
