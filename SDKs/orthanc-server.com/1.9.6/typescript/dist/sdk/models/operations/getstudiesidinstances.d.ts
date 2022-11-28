import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetStudiesIdInstancesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetStudiesIdInstancesQueryParams extends SpeakeasyBase {
    full?: boolean;
    short?: boolean;
}
export declare class GetStudiesIdInstancesRequest extends SpeakeasyBase {
    pathParams: GetStudiesIdInstancesPathParams;
    queryParams: GetStudiesIdInstancesQueryParams;
}
export declare class GetStudiesIdInstancesResponse extends SpeakeasyBase {
    contentType: string;
    getStudiesIdInstances200ApplicationJsonAny?: any;
    statusCode: number;
}
