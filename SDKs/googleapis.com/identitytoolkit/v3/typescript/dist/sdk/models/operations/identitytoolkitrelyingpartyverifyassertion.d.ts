import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitRelyingpartyVerifyAssertionQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class IdentitytoolkitRelyingpartyVerifyAssertionSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitRelyingpartyVerifyAssertionRequest extends SpeakeasyBase {
    queryParams: IdentitytoolkitRelyingpartyVerifyAssertionQueryParams;
    request?: shared.IdentitytoolkitRelyingpartyVerifyAssertionRequest;
    security: IdentitytoolkitRelyingpartyVerifyAssertionSecurity;
}
export declare class IdentitytoolkitRelyingpartyVerifyAssertionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyAssertionResponse?: shared.VerifyAssertionResponse;
}
