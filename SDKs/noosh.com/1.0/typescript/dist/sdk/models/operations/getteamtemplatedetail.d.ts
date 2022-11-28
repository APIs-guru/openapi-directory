import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTeamTemplateDetailPathParams extends SpeakeasyBase {
    teamTemplateId: string;
    workgroupId: string;
}
export declare class GetTeamTemplateDetailRequest extends SpeakeasyBase {
    pathParams: GetTeamTemplateDetailPathParams;
}
export declare class GetTeamTemplateDetailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    teamTemplateExpandVo?: any;
}
