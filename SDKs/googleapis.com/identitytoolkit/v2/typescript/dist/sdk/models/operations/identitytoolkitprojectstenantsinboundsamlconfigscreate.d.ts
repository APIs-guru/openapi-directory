import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitProjectsTenantsInboundSamlConfigsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    inboundSamlConfigId?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurity extends SpeakeasyBase {
    option1?: IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption1;
    option2?: IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption2;
}
export declare class IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest extends SpeakeasyBase {
    pathParams: IdentitytoolkitProjectsTenantsInboundSamlConfigsCreatePathParams;
    queryParams: IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams;
    request?: shared.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput;
    security: IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurity;
}
export declare class IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIdentitytoolkitAdminV2InboundSamlConfig?: shared.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig;
    statusCode: number;
}
