import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveFilesUntrashPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class DriveFilesUntrashQueryParams extends SpeakeasyBase {
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
export declare class DriveFilesUntrashSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesUntrashSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesUntrashSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesUntrashSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesUntrashSecurity extends SpeakeasyBase {
    option1?: DriveFilesUntrashSecurityOption1;
    option2?: DriveFilesUntrashSecurityOption2;
    option3?: DriveFilesUntrashSecurityOption3;
    option4?: DriveFilesUntrashSecurityOption4;
}
export declare class DriveFilesUntrashRequest extends SpeakeasyBase {
    pathParams: DriveFilesUntrashPathParams;
    queryParams: DriveFilesUntrashQueryParams;
    security: DriveFilesUntrashSecurity;
}
export declare class DriveFilesUntrashResponse extends SpeakeasyBase {
    contentType: string;
    file?: shared.File;
    statusCode: number;
}
