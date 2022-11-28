import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSetupV1ResourcesIdAllocationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1ResourcesIdAllocationsQueryParams extends SpeakeasyBase {
    endDate?: Date;
    limit?: number;
    offset?: number;
    startDate?: Date;
}
export declare class GetSetupV1ResourcesIdAllocationsRequest extends SpeakeasyBase {
    pathParams: GetSetupV1ResourcesIdAllocationsPathParams;
    queryParams: GetSetupV1ResourcesIdAllocationsQueryParams;
}
export declare class GetSetupV1ResourcesIdAllocationsResponse extends SpeakeasyBase {
    contentType: string;
    resourceAllocationListViewModel?: Map<string, any>;
    statusCode: number;
}
