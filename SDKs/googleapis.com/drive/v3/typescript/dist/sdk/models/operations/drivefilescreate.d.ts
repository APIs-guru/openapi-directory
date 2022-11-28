import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveFilesCreateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    enforceSingleParent?: boolean;
    fields?: string;
    ignoreDefaultVisibility?: boolean;
    includeLabels?: string;
    includePermissionsForView?: string;
    keepRevisionForever?: boolean;
    key?: string;
    oauthToken?: string;
    ocrLanguage?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    supportsAllDrives?: boolean;
    supportsTeamDrives?: boolean;
    useContentAsIndexableText?: boolean;
    userIp?: string;
}
export declare class DriveFilesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesCreateSecurity extends SpeakeasyBase {
    option1?: DriveFilesCreateSecurityOption1;
    option2?: DriveFilesCreateSecurityOption2;
    option3?: DriveFilesCreateSecurityOption3;
}
export declare class DriveFilesCreateRequest extends SpeakeasyBase {
    queryParams: DriveFilesCreateQueryParams;
    request?: Uint8Array;
    security: DriveFilesCreateSecurity;
}
export declare class DriveFilesCreateResponse extends SpeakeasyBase {
    contentType: string;
    file?: shared.File;
    statusCode: number;
}
