import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveDrivesUnhidePathParams extends SpeakeasyBase {
    driveId: string;
}
export declare class DriveDrivesUnhideQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveDrivesUnhideSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveDrivesUnhideRequest extends SpeakeasyBase {
    pathParams: DriveDrivesUnhidePathParams;
    queryParams: DriveDrivesUnhideQueryParams;
    security: DriveDrivesUnhideSecurity;
}
export declare class DriveDrivesUnhideResponse extends SpeakeasyBase {
    contentType: string;
    drive?: shared.Drive;
    statusCode: number;
}
