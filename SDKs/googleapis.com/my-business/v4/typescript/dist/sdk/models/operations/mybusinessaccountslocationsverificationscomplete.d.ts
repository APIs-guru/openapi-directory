import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsVerificationsCompletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessAccountsLocationsVerificationsCompleteQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsLocationsVerificationsCompleteRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsVerificationsCompletePathParams;
    queryParams: MybusinessAccountsLocationsVerificationsCompleteQueryParams;
    request?: shared.CompleteVerificationRequest;
}
export declare class MybusinessAccountsLocationsVerificationsCompleteResponse extends SpeakeasyBase {
    completeVerificationResponse?: shared.CompleteVerificationResponse;
    contentType: string;
    statusCode: number;
}
