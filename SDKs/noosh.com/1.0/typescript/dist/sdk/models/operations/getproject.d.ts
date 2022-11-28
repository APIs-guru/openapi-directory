import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetProjectPathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class GetProjectRequest extends SpeakeasyBase {
    pathParams: GetProjectPathParams;
}
export declare class GetProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    projectExpandVo?: any;
    statusCode: number;
}
