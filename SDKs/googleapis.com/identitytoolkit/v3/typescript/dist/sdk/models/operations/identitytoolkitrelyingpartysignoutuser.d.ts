import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitRelyingpartySignOutUserQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class IdentitytoolkitRelyingpartySignOutUserSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitRelyingpartySignOutUserRequest extends SpeakeasyBase {
    queryParams: IdentitytoolkitRelyingpartySignOutUserQueryParams;
    request?: shared.IdentitytoolkitRelyingpartySignOutUserRequest;
    security: IdentitytoolkitRelyingpartySignOutUserSecurity;
}
export declare class IdentitytoolkitRelyingpartySignOutUserResponse extends SpeakeasyBase {
    contentType: string;
    identitytoolkitRelyingpartySignOutUserResponse?: shared.IdentitytoolkitRelyingpartySignOutUserResponse;
    statusCode: number;
}
