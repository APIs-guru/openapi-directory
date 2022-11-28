import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostTeamMemberOfProjectPathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class PostTeamMemberOfProjectRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    applicationXYaml: Uint8Array;
    teamMemberPo?: any;
    teamMemberPo1?: any;
    textCsv: Uint8Array;
    textXml: Uint8Array;
    textXYaml: Uint8Array;
}
export declare class PostTeamMemberOfProjectRequest extends SpeakeasyBase {
    pathParams: PostTeamMemberOfProjectPathParams;
    request?: PostTeamMemberOfProjectRequests;
}
export declare class PostTeamMemberOfProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    v1x1InvitedTeamMemberResultsVo?: any;
}
