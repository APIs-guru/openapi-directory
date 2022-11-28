import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitRelyingpartyCreateAuthUriQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class IdentitytoolkitRelyingpartyCreateAuthUriSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitRelyingpartyCreateAuthUriRequest extends SpeakeasyBase {
    queryParams: IdentitytoolkitRelyingpartyCreateAuthUriQueryParams;
    request?: shared.IdentitytoolkitRelyingpartyCreateAuthUriRequest;
    security: IdentitytoolkitRelyingpartyCreateAuthUriSecurity;
}
export declare class IdentitytoolkitRelyingpartyCreateAuthUriResponse extends SpeakeasyBase {
    contentType: string;
    createAuthUriResponse?: shared.CreateAuthUriResponse;
    statusCode: number;
}
