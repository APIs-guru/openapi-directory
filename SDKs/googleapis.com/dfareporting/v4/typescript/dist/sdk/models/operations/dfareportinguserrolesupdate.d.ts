import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingUserRolesUpdatePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingUserRolesUpdateQueryParams extends SpeakeasyBase {
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
export declare class DfareportingUserRolesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingUserRolesUpdateRequest extends SpeakeasyBase {
    pathParams: DfareportingUserRolesUpdatePathParams;
    queryParams: DfareportingUserRolesUpdateQueryParams;
    request?: shared.UserRole;
    security: DfareportingUserRolesUpdateSecurity;
}
export declare class DfareportingUserRolesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userRole?: shared.UserRole;
}
