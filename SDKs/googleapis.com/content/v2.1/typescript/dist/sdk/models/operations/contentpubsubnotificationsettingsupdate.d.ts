import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentPubsubnotificationsettingsUpdatePathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentPubsubnotificationsettingsUpdateQueryParams extends SpeakeasyBase {
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
export declare class ContentPubsubnotificationsettingsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentPubsubnotificationsettingsUpdateRequest extends SpeakeasyBase {
    pathParams: ContentPubsubnotificationsettingsUpdatePathParams;
    queryParams: ContentPubsubnotificationsettingsUpdateQueryParams;
    request?: shared.PubsubNotificationSettings;
    security: ContentPubsubnotificationsettingsUpdateSecurity;
}
export declare class ContentPubsubnotificationsettingsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    pubsubNotificationSettings?: shared.PubsubNotificationSettings;
    statusCode: number;
}
