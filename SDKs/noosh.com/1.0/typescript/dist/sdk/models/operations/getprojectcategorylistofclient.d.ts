import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetProjectCategoryListOfClientPathParams extends SpeakeasyBase {
    clientWorkgroupId: string;
    workgroupId: string;
}
export declare class GetProjectCategoryListOfClientRequest extends SpeakeasyBase {
    pathParams: GetProjectCategoryListOfClientPathParams;
}
export declare class GetProjectCategoryListOfClientResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    projectCategoryListVo?: any;
    statusCode: number;
}
