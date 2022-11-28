import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetProjectCategoryListPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetProjectCategoryListRequest extends SpeakeasyBase {
    pathParams: GetProjectCategoryListPathParams;
}
export declare class GetProjectCategoryListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    projectCategoryListVo?: any;
    statusCode: number;
}
