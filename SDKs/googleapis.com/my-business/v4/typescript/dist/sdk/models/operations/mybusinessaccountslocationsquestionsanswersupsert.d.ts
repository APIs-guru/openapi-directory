import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsQuestionsAnswersUpsertPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessAccountsLocationsQuestionsAnswersUpsertQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessAccountsLocationsQuestionsAnswersUpsertRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsQuestionsAnswersUpsertPathParams;
    queryParams: MybusinessAccountsLocationsQuestionsAnswersUpsertQueryParams;
    request?: shared.UpsertAnswerRequest;
}
export declare class MybusinessAccountsLocationsQuestionsAnswersUpsertResponse extends SpeakeasyBase {
    answer?: shared.Answer;
    contentType: string;
    statusCode: number;
}
