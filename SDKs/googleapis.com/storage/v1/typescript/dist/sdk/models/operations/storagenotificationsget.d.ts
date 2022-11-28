import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageNotificationsGetPathParams extends SpeakeasyBase {
    bucket: string;
    notification: string;
}
export declare class StorageNotificationsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
}
export declare class StorageNotificationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageNotificationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageNotificationsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageNotificationsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageNotificationsGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageNotificationsGetSecurity extends SpeakeasyBase {
    option1?: StorageNotificationsGetSecurityOption1;
    option2?: StorageNotificationsGetSecurityOption2;
    option3?: StorageNotificationsGetSecurityOption3;
    option4?: StorageNotificationsGetSecurityOption4;
    option5?: StorageNotificationsGetSecurityOption5;
}
export declare class StorageNotificationsGetRequest extends SpeakeasyBase {
    pathParams: StorageNotificationsGetPathParams;
    queryParams: StorageNotificationsGetQueryParams;
    security: StorageNotificationsGetSecurity;
}
export declare class StorageNotificationsGetResponse extends SpeakeasyBase {
    contentType: string;
    notification?: shared.Notification;
    statusCode: number;
}
