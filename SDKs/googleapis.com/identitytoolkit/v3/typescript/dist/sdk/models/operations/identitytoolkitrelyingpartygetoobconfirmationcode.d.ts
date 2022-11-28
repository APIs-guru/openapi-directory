import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitRelyingpartyGetOobConfirmationCodeQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class IdentitytoolkitRelyingpartyGetOobConfirmationCodeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest extends SpeakeasyBase {
    queryParams: IdentitytoolkitRelyingpartyGetOobConfirmationCodeQueryParams;
    request?: shared.Relyingparty;
    security: IdentitytoolkitRelyingpartyGetOobConfirmationCodeSecurity;
}
export declare class IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse extends SpeakeasyBase {
    contentType: string;
    getOobConfirmationCodeResponse?: shared.GetOobConfirmationCodeResponse;
    statusCode: number;
}
