import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPatientsIdSharedTagsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPatientsIdSharedTagsQueryParams extends SpeakeasyBase {
    short?: boolean;
    simplify?: boolean;
}
export declare class GetPatientsIdSharedTagsRequest extends SpeakeasyBase {
    pathParams: GetPatientsIdSharedTagsPathParams;
    queryParams: GetPatientsIdSharedTagsQueryParams;
}
export declare class GetPatientsIdSharedTagsResponse extends SpeakeasyBase {
    contentType: string;
    getPatientsIdSharedTags200ApplicationJsonAny?: any;
    statusCode: number;
}
