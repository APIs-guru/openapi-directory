import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StorageChannelsStopQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class StorageChannelsStopSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageChannelsStopSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageChannelsStopSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageChannelsStopSecurity extends SpeakeasyBase {
    option1?: StorageChannelsStopSecurityOption1;
    option2?: StorageChannelsStopSecurityOption2;
    option3?: StorageChannelsStopSecurityOption3;
}
export declare class StorageChannelsStopRequest extends SpeakeasyBase {
    queryParams: StorageChannelsStopQueryParams;
    request?: shared.Channel;
    security: StorageChannelsStopSecurity;
}
export declare class StorageChannelsStopResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
