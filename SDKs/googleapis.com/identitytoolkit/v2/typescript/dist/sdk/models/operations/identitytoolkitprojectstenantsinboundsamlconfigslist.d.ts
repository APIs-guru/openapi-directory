import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitProjectsTenantsInboundSamlConfigsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IdentitytoolkitProjectsTenantsInboundSamlConfigsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IdentitytoolkitProjectsTenantsInboundSamlConfigsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsInboundSamlConfigsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsInboundSamlConfigsListSecurity extends SpeakeasyBase {
    option1?: IdentitytoolkitProjectsTenantsInboundSamlConfigsListSecurityOption1;
    option2?: IdentitytoolkitProjectsTenantsInboundSamlConfigsListSecurityOption2;
}
export declare class IdentitytoolkitProjectsTenantsInboundSamlConfigsListRequest extends SpeakeasyBase {
    pathParams: IdentitytoolkitProjectsTenantsInboundSamlConfigsListPathParams;
    queryParams: IdentitytoolkitProjectsTenantsInboundSamlConfigsListQueryParams;
    security: IdentitytoolkitProjectsTenantsInboundSamlConfigsListSecurity;
}
export declare class IdentitytoolkitProjectsTenantsInboundSamlConfigsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse?: shared.GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse;
    statusCode: number;
}
