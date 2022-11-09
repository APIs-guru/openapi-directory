import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StorageNotificationsInsertPathParams extends SpeakeasyBase {
    bucket: string;
}
export declare class StorageNotificationsInsertQueryParams extends SpeakeasyBase {
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
export declare class StorageNotificationsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageNotificationsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageNotificationsInsertSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageNotificationsInsertSecurity extends SpeakeasyBase {
    option1?: StorageNotificationsInsertSecurityOption1;
    option2?: StorageNotificationsInsertSecurityOption2;
    option3?: StorageNotificationsInsertSecurityOption3;
}
export declare class StorageNotificationsInsertRequest extends SpeakeasyBase {
    pathParams: StorageNotificationsInsertPathParams;
    queryParams: StorageNotificationsInsertQueryParams;
    request?: shared.Notification;
    security: StorageNotificationsInsertSecurity;
}
export declare class StorageNotificationsInsertResponse extends SpeakeasyBase {
    contentType: string;
    notification?: shared.Notification;
    statusCode: number;
}
