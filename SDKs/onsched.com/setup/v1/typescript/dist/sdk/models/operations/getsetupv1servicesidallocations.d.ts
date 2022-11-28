import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSetupV1ServicesIdAllocationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1ServicesIdAllocationsQueryParams extends SpeakeasyBase {
    endDate?: Date;
    limit?: number;
    locationId?: string;
    offset?: number;
    resourceId?: string;
    startDate?: Date;
}
export declare class GetSetupV1ServicesIdAllocationsRequest extends SpeakeasyBase {
    pathParams: GetSetupV1ServicesIdAllocationsPathParams;
    queryParams: GetSetupV1ServicesIdAllocationsQueryParams;
}
export declare class GetSetupV1ServicesIdAllocationsResponse extends SpeakeasyBase {
    contentType: string;
    serviceAllocationListViewModel?: Map<string, any>;
    statusCode: number;
}
