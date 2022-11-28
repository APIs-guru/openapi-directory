import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTeamTemplateListPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetTeamTemplateListRequest extends SpeakeasyBase {
    pathParams: GetTeamTemplateListPathParams;
}
export declare class GetTeamTemplateListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    teamTemplateListVo?: any;
}
