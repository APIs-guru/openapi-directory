import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdPathParams extends SpeakeasyBase {
    projectId: string;
    specId: string;
    workgroupId: string;
}
export declare class PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    applicationXYaml: Uint8Array;
    specUpdatePersistVo?: any;
    specUpdatePersistVo1?: any;
    textCsv: Uint8Array;
    textXml: Uint8Array;
    textXYaml: Uint8Array;
}
export declare class PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequest extends SpeakeasyBase {
    pathParams: PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdPathParams;
    request?: PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequests;
}
export declare class PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    specHttpStatusVo?: any;
    statusCode: number;
}
