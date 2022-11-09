import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetInstancesQueryParams extends SpeakeasyBase {
    expand?: string;
    full?: boolean;
    limit?: number;
    short?: boolean;
    since?: number;
}
export declare class GetInstancesRequest extends SpeakeasyBase {
    queryParams: GetInstancesQueryParams;
}
export declare class GetInstancesResponse extends SpeakeasyBase {
    contentType: string;
    getInstances200ApplicationJsonAny?: any;
    statusCode: number;
}
