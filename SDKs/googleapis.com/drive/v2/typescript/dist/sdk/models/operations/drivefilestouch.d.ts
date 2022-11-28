import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveFilesTouchPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class DriveFilesTouchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    includeLabels?: string;
    includePermissionsForView?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    supportsAllDrives?: boolean;
    supportsTeamDrives?: boolean;
    userIp?: string;
}
export declare class DriveFilesTouchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesTouchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesTouchSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesTouchSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesTouchSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesTouchSecurity extends SpeakeasyBase {
    option1?: DriveFilesTouchSecurityOption1;
    option2?: DriveFilesTouchSecurityOption2;
    option3?: DriveFilesTouchSecurityOption3;
    option4?: DriveFilesTouchSecurityOption4;
    option5?: DriveFilesTouchSecurityOption5;
}
export declare class DriveFilesTouchRequest extends SpeakeasyBase {
    pathParams: DriveFilesTouchPathParams;
    queryParams: DriveFilesTouchQueryParams;
    security: DriveFilesTouchSecurity;
}
export declare class DriveFilesTouchResponse extends SpeakeasyBase {
    contentType: string;
    file?: shared.File;
    statusCode: number;
}
