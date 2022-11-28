import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTeamMemberListOfClientProjectPathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class GetTeamMemberListOfClientProjectRequest extends SpeakeasyBase {
    pathParams: GetTeamMemberListOfClientProjectPathParams;
}
export declare class GetTeamMemberListOfClientProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    teamMemberListVo?: any;
}
