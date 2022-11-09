import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SecuritycenterOrganizationsSourcesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SecuritycenterOrganizationsSourcesListQueryParams extends SpeakeasyBase {
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
export declare class SecuritycenterOrganizationsSourcesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterOrganizationsSourcesListRequest extends SpeakeasyBase {
    pathParams: SecuritycenterOrganizationsSourcesListPathParams;
    queryParams: SecuritycenterOrganizationsSourcesListQueryParams;
    security: SecuritycenterOrganizationsSourcesListSecurity;
}
export declare class SecuritycenterOrganizationsSourcesListResponse extends SpeakeasyBase {
    contentType: string;
    listSourcesResponse?: shared.ListSourcesResponse;
    statusCode: number;
}
