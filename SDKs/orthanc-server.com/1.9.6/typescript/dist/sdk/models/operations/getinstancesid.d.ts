import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetInstancesIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetInstancesIdQueryParams extends SpeakeasyBase {
    full?: boolean;
    short?: boolean;
}
export declare class GetInstancesIdRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdPathParams;
    queryParams: GetInstancesIdQueryParams;
}
export declare class GetInstancesIdResponse extends SpeakeasyBase {
    contentType: string;
    getInstancesId200ApplicationJsonAny?: any;
    statusCode: number;
}
