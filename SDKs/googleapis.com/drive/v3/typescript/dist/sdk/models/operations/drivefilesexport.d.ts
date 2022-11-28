import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveFilesExportPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class DriveFilesExportQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    mimeType: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveFilesExportSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesExportSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesExportSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesExportSecurity extends SpeakeasyBase {
    option1?: DriveFilesExportSecurityOption1;
    option2?: DriveFilesExportSecurityOption2;
    option3?: DriveFilesExportSecurityOption3;
}
export declare class DriveFilesExportRequest extends SpeakeasyBase {
    pathParams: DriveFilesExportPathParams;
    queryParams: DriveFilesExportQueryParams;
    security: DriveFilesExportSecurity;
}
export declare class DriveFilesExportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
