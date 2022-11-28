import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSetupV1LocationsQueryParams extends SpeakeasyBase {
    deleted?: boolean;
    limit?: number;
    name?: string;
    offset?: number;
    serviceId?: string;
}
export declare class GetSetupV1LocationsRequest extends SpeakeasyBase {
    queryParams: GetSetupV1LocationsQueryParams;
}
export declare class GetSetupV1LocationsResponse extends SpeakeasyBase {
    contentType: string;
    locationListViewModel?: Map<string, any>;
    statusCode: number;
}
