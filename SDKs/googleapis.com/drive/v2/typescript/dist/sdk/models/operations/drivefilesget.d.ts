import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveFilesGetPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare enum DriveFilesGetProjectionEnum {
    Basic = "BASIC",
    Full = "FULL"
}
export declare class DriveFilesGetQueryParams extends SpeakeasyBase {
    acknowledgeAbuse?: boolean;
    alt?: shared.AltEnum;
    fields?: string;
    includeLabels?: string;
    includePermissionsForView?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projection?: DriveFilesGetProjectionEnum;
    quotaUser?: string;
    revisionId?: string;
    supportsAllDrives?: boolean;
    supportsTeamDrives?: boolean;
    updateViewedDate?: boolean;
    userIp?: string;
}
export declare class DriveFilesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesGetSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesGetSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesGetSecurity extends SpeakeasyBase {
    option1?: DriveFilesGetSecurityOption1;
    option2?: DriveFilesGetSecurityOption2;
    option3?: DriveFilesGetSecurityOption3;
    option4?: DriveFilesGetSecurityOption4;
    option5?: DriveFilesGetSecurityOption5;
    option6?: DriveFilesGetSecurityOption6;
    option7?: DriveFilesGetSecurityOption7;
}
export declare class DriveFilesGetRequest extends SpeakeasyBase {
    pathParams: DriveFilesGetPathParams;
    queryParams: DriveFilesGetQueryParams;
    security: DriveFilesGetSecurity;
}
export declare class DriveFilesGetResponse extends SpeakeasyBase {
    contentType: string;
    file?: shared.File;
    statusCode: number;
}
