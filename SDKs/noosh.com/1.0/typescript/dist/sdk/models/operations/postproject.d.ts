import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostProjectPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class PostProjectRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    applicationXYaml: Uint8Array;
    projectPersistVo?: any;
    projectPersistVo1?: any;
    textCsv: Uint8Array;
    textXml: Uint8Array;
    textXYaml: Uint8Array;
}
export declare class PostProjectRequest extends SpeakeasyBase {
    pathParams: PostProjectPathParams;
    request?: PostProjectRequests;
}
export declare class PostProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    projectVo?: any;
    statusCode: number;
}
