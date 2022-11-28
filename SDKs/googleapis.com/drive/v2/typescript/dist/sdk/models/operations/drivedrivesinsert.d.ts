import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveDrivesInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId: string;
    userIp?: string;
}
export declare class DriveDrivesInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveDrivesInsertRequest extends SpeakeasyBase {
    queryParams: DriveDrivesInsertQueryParams;
    request?: shared.Drive;
    security: DriveDrivesInsertSecurity;
}
export declare class DriveDrivesInsertResponse extends SpeakeasyBase {
    contentType: string;
    drive?: shared.Drive;
    statusCode: number;
}
