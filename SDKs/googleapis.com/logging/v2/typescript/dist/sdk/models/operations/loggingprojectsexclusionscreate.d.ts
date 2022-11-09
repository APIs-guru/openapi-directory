import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LoggingProjectsExclusionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class LoggingProjectsExclusionsCreateQueryParams extends SpeakeasyBase {
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
export declare class LoggingProjectsExclusionsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsExclusionsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsExclusionsCreateSecurity extends SpeakeasyBase {
    option1?: LoggingProjectsExclusionsCreateSecurityOption1;
    option2?: LoggingProjectsExclusionsCreateSecurityOption2;
}
export declare class LoggingProjectsExclusionsCreateRequest extends SpeakeasyBase {
    pathParams: LoggingProjectsExclusionsCreatePathParams;
    queryParams: LoggingProjectsExclusionsCreateQueryParams;
    request?: shared.LogExclusion;
    security: LoggingProjectsExclusionsCreateSecurity;
}
export declare class LoggingProjectsExclusionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    logExclusion?: shared.LogExclusion;
    statusCode: number;
}
