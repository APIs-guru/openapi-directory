import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetPatientsIdInstancesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPatientsIdInstancesQueryParams extends SpeakeasyBase {
    full?: boolean;
    short?: boolean;
}
export declare class GetPatientsIdInstancesRequest extends SpeakeasyBase {
    pathParams: GetPatientsIdInstancesPathParams;
    queryParams: GetPatientsIdInstancesQueryParams;
}
export declare class GetPatientsIdInstancesResponse extends SpeakeasyBase {
    contentType: string;
    getPatientsIdInstances200ApplicationJsonAny?: any;
    statusCode: number;
}
