import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingUserRolesInsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingUserRolesInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingUserRolesInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingUserRolesInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingUserRolesInsertPathParams;
    queryParams: DfareportingUserRolesInsertQueryParams;
    request?: shared.UserRole;
    security: DfareportingUserRolesInsertSecurity;
}
export declare class DfareportingUserRolesInsertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userRole?: shared.UserRole;
}
