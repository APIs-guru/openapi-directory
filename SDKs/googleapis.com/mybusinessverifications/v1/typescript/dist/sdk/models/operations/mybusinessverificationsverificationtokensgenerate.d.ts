import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessverificationsVerificationTokensGenerateQueryParams extends SpeakeasyBase {
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
export declare class MybusinessverificationsVerificationTokensGenerateRequest extends SpeakeasyBase {
    queryParams: MybusinessverificationsVerificationTokensGenerateQueryParams;
    request?: shared.GenerateVerificationTokenRequest;
}
export declare class MybusinessverificationsVerificationTokensGenerateResponse extends SpeakeasyBase {
    contentType: string;
    generateVerificationTokenResponse?: shared.GenerateVerificationTokenResponse;
    statusCode: number;
}
