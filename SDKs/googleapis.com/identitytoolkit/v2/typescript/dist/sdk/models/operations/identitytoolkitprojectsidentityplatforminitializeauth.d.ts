import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitProjectsIdentityPlatformInitializeAuthPathParams extends SpeakeasyBase {
    project: string;
}
export declare class IdentitytoolkitProjectsIdentityPlatformInitializeAuthQueryParams extends SpeakeasyBase {
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
export declare class IdentitytoolkitProjectsIdentityPlatformInitializeAuthSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsIdentityPlatformInitializeAuthRequest extends SpeakeasyBase {
    pathParams: IdentitytoolkitProjectsIdentityPlatformInitializeAuthPathParams;
    queryParams: IdentitytoolkitProjectsIdentityPlatformInitializeAuthQueryParams;
    request?: Map<string, any>;
    security: IdentitytoolkitProjectsIdentityPlatformInitializeAuthSecurity;
}
export declare class IdentitytoolkitProjectsIdentityPlatformInitializeAuthResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse?: Map<string, any>;
    statusCode: number;
}
