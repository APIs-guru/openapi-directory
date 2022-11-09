import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StorageNotificationsDeletePathParams extends SpeakeasyBase {
    bucket: string;
    notification: string;
}
export declare class StorageNotificationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class StorageNotificationsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageNotificationsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageNotificationsDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageNotificationsDeleteSecurity extends SpeakeasyBase {
    option1?: StorageNotificationsDeleteSecurityOption1;
    option2?: StorageNotificationsDeleteSecurityOption2;
    option3?: StorageNotificationsDeleteSecurityOption3;
}
export declare class StorageNotificationsDeleteRequest extends SpeakeasyBase {
    pathParams: StorageNotificationsDeletePathParams;
    queryParams: StorageNotificationsDeleteQueryParams;
    security: StorageNotificationsDeleteSecurity;
}
export declare class StorageNotificationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
