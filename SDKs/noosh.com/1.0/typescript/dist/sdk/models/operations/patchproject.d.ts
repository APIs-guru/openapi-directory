import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatchProjectPathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class PatchProjectRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    applicationXYaml: Uint8Array;
    projectPatchPo?: any;
    projectPatchPo1?: any;
    textCsv: Uint8Array;
    textXml: Uint8Array;
    textXYaml: Uint8Array;
}
export declare class PatchProjectRequest extends SpeakeasyBase {
    pathParams: PatchProjectPathParams;
    request?: PatchProjectRequests;
}
export declare class PatchProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
}
