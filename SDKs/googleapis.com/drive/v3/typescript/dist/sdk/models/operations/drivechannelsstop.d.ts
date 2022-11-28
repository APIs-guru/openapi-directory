import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveChannelsStopQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveChannelsStopSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChannelsStopSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChannelsStopSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChannelsStopSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChannelsStopSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChannelsStopSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChannelsStopSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChannelsStopSecurity extends SpeakeasyBase {
    option1?: DriveChannelsStopSecurityOption1;
    option2?: DriveChannelsStopSecurityOption2;
    option3?: DriveChannelsStopSecurityOption3;
    option4?: DriveChannelsStopSecurityOption4;
    option5?: DriveChannelsStopSecurityOption5;
    option6?: DriveChannelsStopSecurityOption6;
    option7?: DriveChannelsStopSecurityOption7;
}
export declare class DriveChannelsStopRequest extends SpeakeasyBase {
    queryParams: DriveChannelsStopQueryParams;
    request?: shared.Channel;
    security: DriveChannelsStopSecurity;
}
export declare class DriveChannelsStopResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
