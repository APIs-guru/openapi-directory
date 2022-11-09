import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetStudiesIdSharedTagsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetStudiesIdSharedTagsQueryParams extends SpeakeasyBase {
    short?: boolean;
    simplify?: boolean;
}
export declare class GetStudiesIdSharedTagsRequest extends SpeakeasyBase {
    pathParams: GetStudiesIdSharedTagsPathParams;
    queryParams: GetStudiesIdSharedTagsQueryParams;
}
export declare class GetStudiesIdSharedTagsResponse extends SpeakeasyBase {
    contentType: string;
    getStudiesIdSharedTags200ApplicationJsonAny?: any;
    statusCode: number;
}
