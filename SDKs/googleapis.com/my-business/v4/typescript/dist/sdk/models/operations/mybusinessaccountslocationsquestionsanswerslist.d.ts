import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsQuestionsAnswersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessAccountsLocationsQuestionsAnswersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
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
export declare class MybusinessAccountsLocationsQuestionsAnswersListRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsQuestionsAnswersListPathParams;
    queryParams: MybusinessAccountsLocationsQuestionsAnswersListQueryParams;
}
export declare class MybusinessAccountsLocationsQuestionsAnswersListResponse extends SpeakeasyBase {
    contentType: string;
    listAnswersResponse?: shared.ListAnswersResponse;
    statusCode: number;
}
