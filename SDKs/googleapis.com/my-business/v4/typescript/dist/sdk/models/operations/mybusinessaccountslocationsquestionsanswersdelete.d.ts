import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsQuestionsAnswersDeletePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessAccountsLocationsQuestionsAnswersDeleteQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsLocationsQuestionsAnswersDeleteRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsQuestionsAnswersDeletePathParams;
    queryParams: MybusinessAccountsLocationsQuestionsAnswersDeleteQueryParams;
}
export declare class MybusinessAccountsLocationsQuestionsAnswersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
