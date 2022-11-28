import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecuritycenterOrganizationsAssetsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SecuritycenterOrganizationsAssetsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    compareDuration?: string;
    fieldMask?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readTime?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SecuritycenterOrganizationsAssetsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterOrganizationsAssetsListRequest extends SpeakeasyBase {
    pathParams: SecuritycenterOrganizationsAssetsListPathParams;
    queryParams: SecuritycenterOrganizationsAssetsListQueryParams;
    security: SecuritycenterOrganizationsAssetsListSecurity;
}
export declare class SecuritycenterOrganizationsAssetsListResponse extends SpeakeasyBase {
    contentType: string;
    listAssetsResponse?: shared.ListAssetsResponse;
    statusCode: number;
}
