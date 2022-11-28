import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveRevisionsDeletePathParams extends SpeakeasyBase {
    fileId: string;
    revisionId: string;
}
export declare class DriveRevisionsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveRevisionsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRevisionsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRevisionsDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRevisionsDeleteSecurity extends SpeakeasyBase {
    option1?: DriveRevisionsDeleteSecurityOption1;
    option2?: DriveRevisionsDeleteSecurityOption2;
    option3?: DriveRevisionsDeleteSecurityOption3;
}
export declare class DriveRevisionsDeleteRequest extends SpeakeasyBase {
    pathParams: DriveRevisionsDeletePathParams;
    queryParams: DriveRevisionsDeleteQueryParams;
    security: DriveRevisionsDeleteSecurity;
}
export declare class DriveRevisionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
