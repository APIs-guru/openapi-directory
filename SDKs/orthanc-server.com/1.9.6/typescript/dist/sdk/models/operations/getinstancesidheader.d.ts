import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetInstancesIdHeaderPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetInstancesIdHeaderQueryParams extends SpeakeasyBase {
    short?: boolean;
    simplify?: boolean;
}
export declare class GetInstancesIdHeaderRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdHeaderPathParams;
    queryParams: GetInstancesIdHeaderQueryParams;
}
export declare class GetInstancesIdHeaderResponse extends SpeakeasyBase {
    contentType: string;
    getInstancesIdHeader200ApplicationJsonAny?: any;
    statusCode: number;
}
