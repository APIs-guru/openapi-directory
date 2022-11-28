import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IndexingUrlNotificationsPublishQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IndexingUrlNotificationsPublishSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IndexingUrlNotificationsPublishRequest extends SpeakeasyBase {
    queryParams: IndexingUrlNotificationsPublishQueryParams;
    request?: shared.UrlNotification;
    security: IndexingUrlNotificationsPublishSecurity;
}
export declare class IndexingUrlNotificationsPublishResponse extends SpeakeasyBase {
    contentType: string;
    publishUrlNotificationResponse?: shared.PublishUrlNotificationResponse;
    statusCode: number;
}
