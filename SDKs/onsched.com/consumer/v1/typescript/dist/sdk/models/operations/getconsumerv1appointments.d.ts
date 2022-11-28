import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetConsumerV1AppointmentsQueryParams extends SpeakeasyBase {
    bookedBy?: string;
    calendarId?: string;
    customerId?: string;
    email?: string;
    endDate?: Date;
    lastname?: string;
    limit?: number;
    locationId?: string;
    offset?: number;
    phone?: string;
    resourceId?: string;
    serviceAllocationId?: string;
    serviceId?: string;
    startDate?: Date;
    status?: string;
}
export declare class GetConsumerV1AppointmentsRequest extends SpeakeasyBase {
    queryParams: GetConsumerV1AppointmentsQueryParams;
}
export declare class GetConsumerV1AppointmentsResponse extends SpeakeasyBase {
    appointmentListViewModel?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
