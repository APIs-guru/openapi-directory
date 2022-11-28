import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecuritycenterOrganizationsAssetsRunDiscoveryPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SecuritycenterOrganizationsAssetsRunDiscoveryQueryParams extends SpeakeasyBase {
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
export declare class SecuritycenterOrganizationsAssetsRunDiscoverySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterOrganizationsAssetsRunDiscoveryRequest extends SpeakeasyBase {
    pathParams: SecuritycenterOrganizationsAssetsRunDiscoveryPathParams;
    queryParams: SecuritycenterOrganizationsAssetsRunDiscoveryQueryParams;
    request?: Map<string, any>;
    security: SecuritycenterOrganizationsAssetsRunDiscoverySecurity;
}
export declare class SecuritycenterOrganizationsAssetsRunDiscoveryResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
