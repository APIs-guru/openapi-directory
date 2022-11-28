import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitRelyingpartyGetAccountInfoQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class IdentitytoolkitRelyingpartyGetAccountInfoSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitRelyingpartyGetAccountInfoRequest extends SpeakeasyBase {
    queryParams: IdentitytoolkitRelyingpartyGetAccountInfoQueryParams;
    request?: shared.IdentitytoolkitRelyingpartyGetAccountInfoRequest;
    security: IdentitytoolkitRelyingpartyGetAccountInfoSecurity;
}
export declare class IdentitytoolkitRelyingpartyGetAccountInfoResponse extends SpeakeasyBase {
    contentType: string;
    getAccountInfoResponse?: shared.GetAccountInfoResponse;
    statusCode: number;
}
