import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsQuestionsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessAccountsLocationsQuestionsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessAccountsLocationsQuestionsPatchRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsQuestionsPatchPathParams;
    queryParams: MybusinessAccountsLocationsQuestionsPatchQueryParams;
    request?: shared.Question;
}
export declare class MybusinessAccountsLocationsQuestionsPatchResponse extends SpeakeasyBase {
    contentType: string;
    question?: shared.Question;
    statusCode: number;
}
