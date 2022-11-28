import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveFilesTrashPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class DriveFilesTrashQueryParams extends SpeakeasyBase {
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
export declare class DriveFilesTrashSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesTrashSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesTrashSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesTrashSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesTrashSecurity extends SpeakeasyBase {
    option1?: DriveFilesTrashSecurityOption1;
    option2?: DriveFilesTrashSecurityOption2;
    option3?: DriveFilesTrashSecurityOption3;
    option4?: DriveFilesTrashSecurityOption4;
}
export declare class DriveFilesTrashRequest extends SpeakeasyBase {
    pathParams: DriveFilesTrashPathParams;
    queryParams: DriveFilesTrashQueryParams;
    security: DriveFilesTrashSecurity;
}
export declare class DriveFilesTrashResponse extends SpeakeasyBase {
    contentType: string;
    file?: shared.File;
    statusCode: number;
}
