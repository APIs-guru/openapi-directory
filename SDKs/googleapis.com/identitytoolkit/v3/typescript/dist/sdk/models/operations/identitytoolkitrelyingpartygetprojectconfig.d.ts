import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitRelyingpartyGetProjectConfigQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    delegatedProjectNumber?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projectNumber?: string;
    quotaUser?: string;
    userIp?: string;
}
export declare class IdentitytoolkitRelyingpartyGetProjectConfigSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitRelyingpartyGetProjectConfigRequest extends SpeakeasyBase {
    queryParams: IdentitytoolkitRelyingpartyGetProjectConfigQueryParams;
    security: IdentitytoolkitRelyingpartyGetProjectConfigSecurity;
}
export declare class IdentitytoolkitRelyingpartyGetProjectConfigResponse extends SpeakeasyBase {
    contentType: string;
    identitytoolkitRelyingpartyGetProjectConfigResponse?: shared.IdentitytoolkitRelyingpartyGetProjectConfigResponse;
    statusCode: number;
}
