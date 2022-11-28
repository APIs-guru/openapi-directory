import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitRelyingpartySetAccountInfoQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class IdentitytoolkitRelyingpartySetAccountInfoSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitRelyingpartySetAccountInfoRequest extends SpeakeasyBase {
    queryParams: IdentitytoolkitRelyingpartySetAccountInfoQueryParams;
    request?: shared.IdentitytoolkitRelyingpartySetAccountInfoRequest;
    security: IdentitytoolkitRelyingpartySetAccountInfoSecurity;
}
export declare class IdentitytoolkitRelyingpartySetAccountInfoResponse extends SpeakeasyBase {
    contentType: string;
    setAccountInfoResponse?: shared.SetAccountInfoResponse;
    statusCode: number;
}
