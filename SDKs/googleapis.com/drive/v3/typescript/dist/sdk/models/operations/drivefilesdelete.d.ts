import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveFilesDeletePathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class DriveFilesDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    enforceSingleParent?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    supportsAllDrives?: boolean;
    supportsTeamDrives?: boolean;
    userIp?: string;
}
export declare class DriveFilesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesDeleteSecurity extends SpeakeasyBase {
    option1?: DriveFilesDeleteSecurityOption1;
    option2?: DriveFilesDeleteSecurityOption2;
    option3?: DriveFilesDeleteSecurityOption3;
}
export declare class DriveFilesDeleteRequest extends SpeakeasyBase {
    pathParams: DriveFilesDeletePathParams;
    queryParams: DriveFilesDeleteQueryParams;
    security: DriveFilesDeleteSecurity;
}
export declare class DriveFilesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
