import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsQuestionsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessAccountsLocationsQuestionsDeleteQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsLocationsQuestionsDeleteRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsQuestionsDeletePathParams;
    queryParams: MybusinessAccountsLocationsQuestionsDeleteQueryParams;
}
export declare class MybusinessAccountsLocationsQuestionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
