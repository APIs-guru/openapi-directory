import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetStudiesIdInstancesTagsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetStudiesIdInstancesTagsQueryParams extends SpeakeasyBase {
    ignoreLength?: string[];
    short?: boolean;
    simplify?: boolean;
}
export declare class GetStudiesIdInstancesTagsRequest extends SpeakeasyBase {
    pathParams: GetStudiesIdInstancesTagsPathParams;
    queryParams: GetStudiesIdInstancesTagsQueryParams;
}
export declare class GetStudiesIdInstancesTagsResponse extends SpeakeasyBase {
    contentType: string;
    getStudiesIdInstancesTags200ApplicationJsonAny?: any;
    statusCode: number;
}
