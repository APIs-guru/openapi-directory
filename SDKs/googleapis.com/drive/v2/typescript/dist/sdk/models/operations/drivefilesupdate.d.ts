import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveFilesUpdatePathParams extends SpeakeasyBase {
    fileId: string;
}
export declare enum DriveFilesUpdateModifiedDateBehaviorEnum {
    FromBody = "fromBody",
    FromBodyIfNeeded = "fromBodyIfNeeded",
    FromBodyOrNow = "fromBodyOrNow",
    NoChange = "noChange",
    Now = "now",
    NowIfNeeded = "nowIfNeeded"
}
export declare class DriveFilesUpdateQueryParams extends SpeakeasyBase {
    addParents?: string;
    alt?: shared.AltEnum;
    convert?: boolean;
    enforceSingleParent?: boolean;
    fields?: string;
    includeLabels?: string;
    includePermissionsForView?: string;
    key?: string;
    modifiedDateBehavior?: DriveFilesUpdateModifiedDateBehaviorEnum;
    newRevision?: boolean;
    oauthToken?: string;
    ocr?: boolean;
    ocrLanguage?: string;
    pinned?: boolean;
    prettyPrint?: boolean;
    quotaUser?: string;
    removeParents?: string;
    setModifiedDate?: boolean;
    supportsAllDrives?: boolean;
    supportsTeamDrives?: boolean;
    timedTextLanguage?: string;
    timedTextTrackName?: string;
    updateViewedDate?: boolean;
    useContentAsIndexableText?: boolean;
    userIp?: string;
}
export declare class DriveFilesUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesUpdateSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesUpdateSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesUpdateSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesUpdateSecurity extends SpeakeasyBase {
    option1?: DriveFilesUpdateSecurityOption1;
    option2?: DriveFilesUpdateSecurityOption2;
    option3?: DriveFilesUpdateSecurityOption3;
    option4?: DriveFilesUpdateSecurityOption4;
    option5?: DriveFilesUpdateSecurityOption5;
    option6?: DriveFilesUpdateSecurityOption6;
}
export declare class DriveFilesUpdateRequest extends SpeakeasyBase {
    pathParams: DriveFilesUpdatePathParams;
    queryParams: DriveFilesUpdateQueryParams;
    request?: Uint8Array;
    security: DriveFilesUpdateSecurity;
}
export declare class DriveFilesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    file?: shared.File;
    statusCode: number;
}
