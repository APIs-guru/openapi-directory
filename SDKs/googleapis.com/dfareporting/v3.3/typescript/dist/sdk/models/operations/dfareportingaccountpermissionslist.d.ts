import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAccountPermissionsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingAccountPermissionsListQueryParams extends SpeakeasyBase {
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
export declare class DfareportingAccountPermissionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAccountPermissionsListRequest extends SpeakeasyBase {
    pathParams: DfareportingAccountPermissionsListPathParams;
    queryParams: DfareportingAccountPermissionsListQueryParams;
    security: DfareportingAccountPermissionsListSecurity;
}
export declare class DfareportingAccountPermissionsListResponse extends SpeakeasyBase {
    accountPermissionsListResponse?: shared.AccountPermissionsListResponse;
    contentType: string;
    statusCode: number;
}
