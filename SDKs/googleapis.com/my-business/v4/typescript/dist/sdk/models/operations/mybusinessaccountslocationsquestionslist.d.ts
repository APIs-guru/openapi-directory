import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsQuestionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessAccountsLocationsQuestionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    answersPerQuestion?: number;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessAccountsLocationsQuestionsListRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsQuestionsListPathParams;
    queryParams: MybusinessAccountsLocationsQuestionsListQueryParams;
}
export declare class MybusinessAccountsLocationsQuestionsListResponse extends SpeakeasyBase {
    contentType: string;
    listQuestionsResponse?: shared.ListQuestionsResponse;
    statusCode: number;
}
