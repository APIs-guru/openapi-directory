import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingUserRolesPatchPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingUserRolesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingUserRolesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingUserRolesPatchRequest extends SpeakeasyBase {
    pathParams: DfareportingUserRolesPatchPathParams;
    queryParams: DfareportingUserRolesPatchQueryParams;
    request?: shared.UserRole;
    security: DfareportingUserRolesPatchSecurity;
}
export declare class DfareportingUserRolesPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userRole?: shared.UserRole;
}
