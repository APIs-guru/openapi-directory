import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAccountPermissionGroupsGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingAccountPermissionGroupsGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingAccountPermissionGroupsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAccountPermissionGroupsGetRequest extends SpeakeasyBase {
    pathParams: DfareportingAccountPermissionGroupsGetPathParams;
    queryParams: DfareportingAccountPermissionGroupsGetQueryParams;
    security: DfareportingAccountPermissionGroupsGetSecurity;
}
export declare class DfareportingAccountPermissionGroupsGetResponse extends SpeakeasyBase {
    accountPermissionGroup?: shared.AccountPermissionGroup;
    contentType: string;
    statusCode: number;
}
