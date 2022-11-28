import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveDrivesHidePathParams extends SpeakeasyBase {
    driveId: string;
}
export declare class DriveDrivesHideQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveDrivesHideSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveDrivesHideRequest extends SpeakeasyBase {
    pathParams: DriveDrivesHidePathParams;
    queryParams: DriveDrivesHideQueryParams;
    security: DriveDrivesHideSecurity;
}
export declare class DriveDrivesHideResponse extends SpeakeasyBase {
    contentType: string;
    drive?: shared.Drive;
    statusCode: number;
}
