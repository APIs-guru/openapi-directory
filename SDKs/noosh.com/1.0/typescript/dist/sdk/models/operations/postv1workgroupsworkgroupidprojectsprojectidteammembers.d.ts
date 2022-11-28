import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersPathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    applicationXYaml: Uint8Array;
    contactUserVo?: any;
    contactUserVo1?: any;
    textCsv: Uint8Array;
    textXml: Uint8Array;
    textXYaml: Uint8Array;
}
export declare class PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRequest extends SpeakeasyBase {
    pathParams: PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersPathParams;
    request?: PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRequests;
}
export declare class PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    teamMemberBaseInfVo?: any;
}
