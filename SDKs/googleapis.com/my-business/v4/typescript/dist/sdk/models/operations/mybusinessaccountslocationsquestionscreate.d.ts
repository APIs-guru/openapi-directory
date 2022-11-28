import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsQuestionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessAccountsLocationsQuestionsCreateQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsLocationsQuestionsCreateRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsQuestionsCreatePathParams;
    queryParams: MybusinessAccountsLocationsQuestionsCreateQueryParams;
    request?: shared.Question;
}
export declare class MybusinessAccountsLocationsQuestionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    question?: shared.Question;
    statusCode: number;
}
