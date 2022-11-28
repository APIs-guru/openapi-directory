import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTeamMemberListOfProjectPathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class GetTeamMemberListOfProjectRequest extends SpeakeasyBase {
    pathParams: GetTeamMemberListOfProjectPathParams;
}
export declare class GetTeamMemberListOfProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    teamMemberListVo?: any;
}
