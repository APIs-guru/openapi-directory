import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SecuritycenterOrganizationsSourcesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SecuritycenterOrganizationsSourcesGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SecuritycenterOrganizationsSourcesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterOrganizationsSourcesGetRequest extends SpeakeasyBase {
    pathParams: SecuritycenterOrganizationsSourcesGetPathParams;
    queryParams: SecuritycenterOrganizationsSourcesGetQueryParams;
    security: SecuritycenterOrganizationsSourcesGetSecurity;
}
export declare class SecuritycenterOrganizationsSourcesGetResponse extends SpeakeasyBase {
    contentType: string;
    source?: shared.Source;
    statusCode: number;
}
