import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostTaskForProjectPathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class PostTaskForProjectRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    applicationXYaml: Uint8Array;
    taskPersistVo?: any;
    taskPersistVo1?: any;
    textCsv: Uint8Array;
    textXml: Uint8Array;
    textXYaml: Uint8Array;
}
export declare class PostTaskForProjectRequest extends SpeakeasyBase {
    pathParams: PostTaskForProjectPathParams;
    request?: PostTaskForProjectRequests;
}
export declare class PostTaskForProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    taskCreatedVo?: any;
}
