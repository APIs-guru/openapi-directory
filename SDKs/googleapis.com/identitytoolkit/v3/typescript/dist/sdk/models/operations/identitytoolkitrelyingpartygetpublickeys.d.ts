import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitRelyingpartyGetPublicKeysQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class IdentitytoolkitRelyingpartyGetPublicKeysSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitRelyingpartyGetPublicKeysRequest extends SpeakeasyBase {
    queryParams: IdentitytoolkitRelyingpartyGetPublicKeysQueryParams;
    security: IdentitytoolkitRelyingpartyGetPublicKeysSecurity;
}
export declare class IdentitytoolkitRelyingpartyGetPublicKeysResponse extends SpeakeasyBase {
    contentType: string;
    identitytoolkitRelyingpartyGetPublicKeysResponse?: Map<string, string>;
    statusCode: number;
}
