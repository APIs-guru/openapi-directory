import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveFilesCopyPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare enum DriveFilesCopyVisibilityEnum {
    Default = "DEFAULT",
    Private = "PRIVATE"
}
export declare class DriveFilesCopyQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    convert?: boolean;
    enforceSingleParent?: boolean;
    fields?: string;
    includeLabels?: string;
    includePermissionsForView?: string;
    key?: string;
    oauthToken?: string;
    ocr?: boolean;
    ocrLanguage?: string;
    pinned?: boolean;
    prettyPrint?: boolean;
    quotaUser?: string;
    supportsAllDrives?: boolean;
    supportsTeamDrives?: boolean;
    timedTextLanguage?: string;
    timedTextTrackName?: string;
    userIp?: string;
    visibility?: DriveFilesCopyVisibilityEnum;
}
export declare class DriveFilesCopySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesCopySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesCopySecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesCopySecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesCopySecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesCopySecurity extends SpeakeasyBase {
    option1?: DriveFilesCopySecurityOption1;
    option2?: DriveFilesCopySecurityOption2;
    option3?: DriveFilesCopySecurityOption3;
    option4?: DriveFilesCopySecurityOption4;
    option5?: DriveFilesCopySecurityOption5;
}
export declare class DriveFilesCopyRequest extends SpeakeasyBase {
    pathParams: DriveFilesCopyPathParams;
    queryParams: DriveFilesCopyQueryParams;
    request?: shared.FileInput;
    security: DriveFilesCopySecurity;
}
export declare class DriveFilesCopyResponse extends SpeakeasyBase {
    contentType: string;
    file?: shared.File;
    statusCode: number;
}
