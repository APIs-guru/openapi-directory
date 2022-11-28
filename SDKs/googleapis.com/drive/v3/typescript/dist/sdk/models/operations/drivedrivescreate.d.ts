import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveDrivesCreateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId: string;
    userIp?: string;
}
export declare class DriveDrivesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveDrivesCreateRequest extends SpeakeasyBase {
    queryParams: DriveDrivesCreateQueryParams;
    request?: shared.Drive;
    security: DriveDrivesCreateSecurity;
}
export declare class DriveDrivesCreateResponse extends SpeakeasyBase {
    contentType: string;
    drive?: shared.Drive;
    statusCode: number;
}
