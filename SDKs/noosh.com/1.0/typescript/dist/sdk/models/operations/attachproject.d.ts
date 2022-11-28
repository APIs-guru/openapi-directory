import { SpeakeasyBase } from "../../../internal/utils";
export declare class AttachProjectPathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class AttachProjectRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    applicationXYaml: Uint8Array;
    projectIdListVo?: any;
    projectIdListVo1?: any;
    textCsv: Uint8Array;
    textXml: Uint8Array;
    textXYaml: Uint8Array;
}
export declare class AttachProjectRequest extends SpeakeasyBase {
    pathParams: AttachProjectPathParams;
    request?: AttachProjectRequests;
}
export declare class AttachProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
}
