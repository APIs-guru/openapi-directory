import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsUpdateNotificationsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessAccountsUpdateNotificationsQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsUpdateNotificationsRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsUpdateNotificationsPathParams;
    queryParams: MybusinessAccountsUpdateNotificationsQueryParams;
    request?: shared.Notifications;
}
export declare class MybusinessAccountsUpdateNotificationsResponse extends SpeakeasyBase {
    contentType: string;
    notifications?: shared.Notifications;
    statusCode: number;
}
