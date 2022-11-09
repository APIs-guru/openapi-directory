import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SecuritycenterOrganizationsSourcesFindingsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SecuritycenterOrganizationsSourcesFindingsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
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
export declare class SecuritycenterOrganizationsSourcesFindingsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterOrganizationsSourcesFindingsListRequest extends SpeakeasyBase {
    pathParams: SecuritycenterOrganizationsSourcesFindingsListPathParams;
    queryParams: SecuritycenterOrganizationsSourcesFindingsListQueryParams;
    security: SecuritycenterOrganizationsSourcesFindingsListSecurity;
}
export declare class SecuritycenterOrganizationsSourcesFindingsListResponse extends SpeakeasyBase {
    contentType: string;
    listFindingsResponse?: shared.ListFindingsResponse;
    statusCode: number;
}
