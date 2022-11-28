import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksNotificationGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    locale?: string;
    notificationId: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    source?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BooksNotificationGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksNotificationGetRequest extends SpeakeasyBase {
    queryParams: BooksNotificationGetQueryParams;
    security: BooksNotificationGetSecurity;
}
export declare class BooksNotificationGetResponse extends SpeakeasyBase {
    contentType: string;
    notification?: shared.Notification;
    statusCode: number;
}
