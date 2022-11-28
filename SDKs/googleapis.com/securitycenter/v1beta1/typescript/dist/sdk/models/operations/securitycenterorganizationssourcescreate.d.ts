import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecuritycenterOrganizationsSourcesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SecuritycenterOrganizationsSourcesCreateQueryParams extends SpeakeasyBase {
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
export declare class SecuritycenterOrganizationsSourcesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterOrganizationsSourcesCreateRequest extends SpeakeasyBase {
    pathParams: SecuritycenterOrganizationsSourcesCreatePathParams;
    queryParams: SecuritycenterOrganizationsSourcesCreateQueryParams;
    request?: shared.Source;
    security: SecuritycenterOrganizationsSourcesCreateSecurity;
}
export declare class SecuritycenterOrganizationsSourcesCreateResponse extends SpeakeasyBase {
    contentType: string;
    source?: shared.Source;
    statusCode: number;
}
