import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageNotificationsListPathParams extends SpeakeasyBase {
    bucket: string;
}
export declare class StorageNotificationsListQueryParams extends SpeakeasyBase {
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
export declare class StorageNotificationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageNotificationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageNotificationsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageNotificationsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageNotificationsListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageNotificationsListSecurity extends SpeakeasyBase {
    option1?: StorageNotificationsListSecurityOption1;
    option2?: StorageNotificationsListSecurityOption2;
    option3?: StorageNotificationsListSecurityOption3;
    option4?: StorageNotificationsListSecurityOption4;
    option5?: StorageNotificationsListSecurityOption5;
}
export declare class StorageNotificationsListRequest extends SpeakeasyBase {
    pathParams: StorageNotificationsListPathParams;
    queryParams: StorageNotificationsListQueryParams;
    security: StorageNotificationsListSecurity;
}
export declare class StorageNotificationsListResponse extends SpeakeasyBase {
    contentType: string;
    notifications?: shared.Notifications;
    statusCode: number;
}
