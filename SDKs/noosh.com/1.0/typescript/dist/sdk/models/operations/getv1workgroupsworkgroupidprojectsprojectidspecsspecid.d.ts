import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdPathParams extends SpeakeasyBase {
    projectId: string;
    specId: string;
    workgroupId: string;
}
export declare class GetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequest extends SpeakeasyBase {
    pathParams: GetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdPathParams;
}
export declare class GetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    specListVo?: any;
    statusCode: number;
}
