import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveFilesPatchPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare enum DriveFilesPatchModifiedDateBehaviorEnum {
    FromBody = "fromBody",
    FromBodyIfNeeded = "fromBodyIfNeeded",
    FromBodyOrNow = "fromBodyOrNow",
    NoChange = "noChange",
    Now = "now",
    NowIfNeeded = "nowIfNeeded"
}
export declare class DriveFilesPatchQueryParams extends SpeakeasyBase {
    addParents?: string;
    alt?: shared.AltEnum;
    convert?: boolean;
    enforceSingleParent?: boolean;
    fields?: string;
    includeLabels?: string;
    includePermissionsForView?: string;
    key?: string;
    modifiedDateBehavior?: DriveFilesPatchModifiedDateBehaviorEnum;
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
export declare class DriveFilesPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesPatchSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesPatchSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesPatchSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesPatchSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesPatchSecurity extends SpeakeasyBase {
    option1?: DriveFilesPatchSecurityOption1;
    option2?: DriveFilesPatchSecurityOption2;
    option3?: DriveFilesPatchSecurityOption3;
    option4?: DriveFilesPatchSecurityOption4;
    option5?: DriveFilesPatchSecurityOption5;
    option6?: DriveFilesPatchSecurityOption6;
}
export declare class DriveFilesPatchRequest extends SpeakeasyBase {
    pathParams: DriveFilesPatchPathParams;
    queryParams: DriveFilesPatchQueryParams;
    request?: shared.FileInput;
    security: DriveFilesPatchSecurity;
}
export declare class DriveFilesPatchResponse extends SpeakeasyBase {
    contentType: string;
    file?: shared.File;
    statusCode: number;
}
