import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SecuritycenterOrganizationsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SecuritycenterOrganizationsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class SecuritycenterOrganizationsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterOrganizationsOperationsListRequest extends SpeakeasyBase {
    pathParams: SecuritycenterOrganizationsOperationsListPathParams;
    queryParams: SecuritycenterOrganizationsOperationsListQueryParams;
    security: SecuritycenterOrganizationsOperationsListSecurity;
}
export declare class SecuritycenterOrganizationsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
