import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DriveFilesInsertVisibilityEnum {
    Default = "DEFAULT",
    Private = "PRIVATE"
}
export declare class DriveFilesInsertQueryParams extends SpeakeasyBase {
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
    useContentAsIndexableText?: boolean;
    userIp?: string;
    visibility?: DriveFilesInsertVisibilityEnum;
}
export declare class DriveFilesInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesInsertSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesInsertSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesInsertSecurity extends SpeakeasyBase {
    option1?: DriveFilesInsertSecurityOption1;
    option2?: DriveFilesInsertSecurityOption2;
    option3?: DriveFilesInsertSecurityOption3;
    option4?: DriveFilesInsertSecurityOption4;
}
export declare class DriveFilesInsertRequest extends SpeakeasyBase {
    queryParams: DriveFilesInsertQueryParams;
    request?: Uint8Array;
    security: DriveFilesInsertSecurity;
}
export declare class DriveFilesInsertResponse extends SpeakeasyBase {
    contentType: string;
    file?: shared.File;
    statusCode: number;
}
