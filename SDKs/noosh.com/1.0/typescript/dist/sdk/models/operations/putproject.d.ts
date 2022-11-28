import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutProjectPathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class PutProjectRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    applicationXYaml: Uint8Array;
    projectPersistVo?: any;
    projectPersistVo1?: any;
    textCsv: Uint8Array;
    textXml: Uint8Array;
    textXYaml: Uint8Array;
}
export declare class PutProjectRequest extends SpeakeasyBase {
    pathParams: PutProjectPathParams;
    request?: PutProjectRequests;
}
export declare class PutProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
}
