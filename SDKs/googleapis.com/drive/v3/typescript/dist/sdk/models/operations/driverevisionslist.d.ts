import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveRevisionsListPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class DriveRevisionsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveRevisionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRevisionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRevisionsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRevisionsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRevisionsListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRevisionsListSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRevisionsListSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRevisionsListSecurity extends SpeakeasyBase {
    option1?: DriveRevisionsListSecurityOption1;
    option2?: DriveRevisionsListSecurityOption2;
    option3?: DriveRevisionsListSecurityOption3;
    option4?: DriveRevisionsListSecurityOption4;
    option5?: DriveRevisionsListSecurityOption5;
    option6?: DriveRevisionsListSecurityOption6;
    option7?: DriveRevisionsListSecurityOption7;
}
export declare class DriveRevisionsListRequest extends SpeakeasyBase {
    pathParams: DriveRevisionsListPathParams;
    queryParams: DriveRevisionsListQueryParams;
    security: DriveRevisionsListSecurity;
}
export declare class DriveRevisionsListResponse extends SpeakeasyBase {
    contentType: string;
    revisionList?: shared.RevisionList;
    statusCode: number;
}
