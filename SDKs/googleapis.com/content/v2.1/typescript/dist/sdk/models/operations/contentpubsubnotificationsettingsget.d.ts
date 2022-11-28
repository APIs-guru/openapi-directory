import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentPubsubnotificationsettingsGetPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentPubsubnotificationsettingsGetQueryParams extends SpeakeasyBase {
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
export declare class ContentPubsubnotificationsettingsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentPubsubnotificationsettingsGetRequest extends SpeakeasyBase {
    pathParams: ContentPubsubnotificationsettingsGetPathParams;
    queryParams: ContentPubsubnotificationsettingsGetQueryParams;
    security: ContentPubsubnotificationsettingsGetSecurity;
}
export declare class ContentPubsubnotificationsettingsGetResponse extends SpeakeasyBase {
    contentType: string;
    pubsubNotificationSettings?: shared.PubsubNotificationSettings;
    statusCode: number;
}
