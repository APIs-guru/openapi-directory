import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitRelyingpartySetProjectConfigQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class IdentitytoolkitRelyingpartySetProjectConfigSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitRelyingpartySetProjectConfigRequest extends SpeakeasyBase {
    queryParams: IdentitytoolkitRelyingpartySetProjectConfigQueryParams;
    request?: shared.IdentitytoolkitRelyingpartySetProjectConfigRequest;
    security: IdentitytoolkitRelyingpartySetProjectConfigSecurity;
}
export declare class IdentitytoolkitRelyingpartySetProjectConfigResponse extends SpeakeasyBase {
    contentType: string;
    identitytoolkitRelyingpartySetProjectConfigResponse?: shared.IdentitytoolkitRelyingpartySetProjectConfigResponse;
    statusCode: number;
}
