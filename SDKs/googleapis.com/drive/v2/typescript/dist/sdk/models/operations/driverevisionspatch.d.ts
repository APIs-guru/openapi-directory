import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveRevisionsPatchPathParams extends SpeakeasyBase {
    fileId: string;
    revisionId: string;
}
export declare class DriveRevisionsPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveRevisionsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRevisionsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRevisionsPatchSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRevisionsPatchSecurity extends SpeakeasyBase {
    option1?: DriveRevisionsPatchSecurityOption1;
    option2?: DriveRevisionsPatchSecurityOption2;
    option3?: DriveRevisionsPatchSecurityOption3;
}
export declare class DriveRevisionsPatchRequest extends SpeakeasyBase {
    pathParams: DriveRevisionsPatchPathParams;
    queryParams: DriveRevisionsPatchQueryParams;
    request?: shared.Revision;
    security: DriveRevisionsPatchSecurity;
}
export declare class DriveRevisionsPatchResponse extends SpeakeasyBase {
    contentType: string;
    revision?: shared.Revision;
    statusCode: number;
}
