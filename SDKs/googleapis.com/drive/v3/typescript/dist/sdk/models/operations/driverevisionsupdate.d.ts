import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveRevisionsUpdatePathParams extends SpeakeasyBase {
    fileId: string;
    revisionId: string;
}
export declare class DriveRevisionsUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveRevisionsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRevisionsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRevisionsUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRevisionsUpdateSecurity extends SpeakeasyBase {
    option1?: DriveRevisionsUpdateSecurityOption1;
    option2?: DriveRevisionsUpdateSecurityOption2;
    option3?: DriveRevisionsUpdateSecurityOption3;
}
export declare class DriveRevisionsUpdateRequest extends SpeakeasyBase {
    pathParams: DriveRevisionsUpdatePathParams;
    queryParams: DriveRevisionsUpdateQueryParams;
    request?: shared.Revision;
    security: DriveRevisionsUpdateSecurity;
}
export declare class DriveRevisionsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    revision?: shared.Revision;
    statusCode: number;
}
