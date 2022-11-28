import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteTeamMemberOfProjectPathParams extends SpeakeasyBase {
    projectId: string;
    teammemberId: string;
    workgroupId: string;
}
export declare class DeleteTeamMemberOfProjectRequest extends SpeakeasyBase {
    pathParams: DeleteTeamMemberOfProjectPathParams;
}
export declare class DeleteTeamMemberOfProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    teamMemberBaseInfVo?: any;
}
