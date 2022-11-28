import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsloginUsersGetLoginProfilePathParams extends SpeakeasyBase {
    name: string;
}
export declare enum OsloginUsersGetLoginProfileOperatingSystemTypeEnum {
    OperatingSystemTypeUnspecified = "OPERATING_SYSTEM_TYPE_UNSPECIFIED",
    Linux = "LINUX",
    Windows = "WINDOWS"
}
export declare enum OsloginUsersGetLoginProfileViewEnum {
    LoginProfileViewUnspecified = "LOGIN_PROFILE_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    SecurityKey = "SECURITY_KEY"
}
export declare class OsloginUsersGetLoginProfileQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    operatingSystemType?: OsloginUsersGetLoginProfileOperatingSystemTypeEnum;
    prettyPrint?: boolean;
    projectId?: string;
    quotaUser?: string;
    systemId?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: OsloginUsersGetLoginProfileViewEnum;
}
export declare class OsloginUsersGetLoginProfileSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsloginUsersGetLoginProfileSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsloginUsersGetLoginProfileSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsloginUsersGetLoginProfileSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsloginUsersGetLoginProfileSecurity extends SpeakeasyBase {
    option1?: OsloginUsersGetLoginProfileSecurityOption1;
    option2?: OsloginUsersGetLoginProfileSecurityOption2;
    option3?: OsloginUsersGetLoginProfileSecurityOption3;
    option4?: OsloginUsersGetLoginProfileSecurityOption4;
}
export declare class OsloginUsersGetLoginProfileRequest extends SpeakeasyBase {
    pathParams: OsloginUsersGetLoginProfilePathParams;
    queryParams: OsloginUsersGetLoginProfileQueryParams;
    security: OsloginUsersGetLoginProfileSecurity;
}
export declare class OsloginUsersGetLoginProfileResponse extends SpeakeasyBase {
    contentType: string;
    loginProfile?: shared.LoginProfile;
    statusCode: number;
}
