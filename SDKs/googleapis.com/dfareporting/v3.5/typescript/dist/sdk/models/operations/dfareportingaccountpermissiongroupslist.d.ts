import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAccountPermissionGroupsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingAccountPermissionGroupsListQueryParams extends SpeakeasyBase {
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
export declare class DfareportingAccountPermissionGroupsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAccountPermissionGroupsListRequest extends SpeakeasyBase {
    pathParams: DfareportingAccountPermissionGroupsListPathParams;
    queryParams: DfareportingAccountPermissionGroupsListQueryParams;
    security: DfareportingAccountPermissionGroupsListSecurity;
}
export declare class DfareportingAccountPermissionGroupsListResponse extends SpeakeasyBase {
    accountPermissionGroupsListResponse?: shared.AccountPermissionGroupsListResponse;
    contentType: string;
    statusCode: number;
}
