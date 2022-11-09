import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetConsumerV1LocationsQueryParams extends SpeakeasyBase {
    ignorePrimary?: boolean;
    limit?: number;
    name?: string;
    nearestTo?: string;
    offset?: number;
    proximity?: number;
    regionId?: string;
    serviceId?: string;
    units?: string;
}
export declare class GetConsumerV1LocationsRequest extends SpeakeasyBase {
    queryParams: GetConsumerV1LocationsQueryParams;
}
export declare class GetConsumerV1LocationsResponse extends SpeakeasyBase {
    contentType: string;
    locationListViewModel?: Map<string, any>;
    statusCode: number;
}
