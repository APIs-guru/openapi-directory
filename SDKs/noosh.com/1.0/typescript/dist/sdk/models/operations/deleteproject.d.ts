import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteProjectPathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class DeleteProjectRequest extends SpeakeasyBase {
    pathParams: DeleteProjectPathParams;
}
export declare class DeleteProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
}
