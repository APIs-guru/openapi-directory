import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveRevisionsGetPathParams extends SpeakeasyBase {
    fileId: string;
    revisionId: string;
}
export declare class DriveRevisionsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveRevisionsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRevisionsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRevisionsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRevisionsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRevisionsGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRevisionsGetSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRevisionsGetSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRevisionsGetSecurity extends SpeakeasyBase {
    option1?: DriveRevisionsGetSecurityOption1;
    option2?: DriveRevisionsGetSecurityOption2;
    option3?: DriveRevisionsGetSecurityOption3;
    option4?: DriveRevisionsGetSecurityOption4;
    option5?: DriveRevisionsGetSecurityOption5;
    option6?: DriveRevisionsGetSecurityOption6;
    option7?: DriveRevisionsGetSecurityOption7;
}
export declare class DriveRevisionsGetRequest extends SpeakeasyBase {
    pathParams: DriveRevisionsGetPathParams;
    queryParams: DriveRevisionsGetQueryParams;
    security: DriveRevisionsGetSecurity;
}
export declare class DriveRevisionsGetResponse extends SpeakeasyBase {
    contentType: string;
    revision?: shared.Revision;
    statusCode: number;
}
