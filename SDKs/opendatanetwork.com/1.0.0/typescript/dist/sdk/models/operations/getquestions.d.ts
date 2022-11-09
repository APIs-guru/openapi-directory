import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetQuestionsQueryParams extends SpeakeasyBase {
    appToken?: string;
    limit?: number;
    offset?: number;
    query: string;
}
export declare class GetQuestionsHeaders extends SpeakeasyBase {
    xAppToken?: string;
}
export declare class GetQuestionsRequest extends SpeakeasyBase {
    queryParams: GetQuestionsQueryParams;
    headers: GetQuestionsHeaders;
}
export declare class GetQuestionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
