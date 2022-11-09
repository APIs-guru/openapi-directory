import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ResellerSubscriptionsChangeRenewalSettingsPathParams extends SpeakeasyBase {
    customerId: string;
    subscriptionId: string;
}
export declare class ResellerSubscriptionsChangeRenewalSettingsQueryParams extends SpeakeasyBase {
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
export declare class ResellerSubscriptionsChangeRenewalSettingsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ResellerSubscriptionsChangeRenewalSettingsRequest extends SpeakeasyBase {
    pathParams: ResellerSubscriptionsChangeRenewalSettingsPathParams;
    queryParams: ResellerSubscriptionsChangeRenewalSettingsQueryParams;
    request?: shared.RenewalSettings;
    security: ResellerSubscriptionsChangeRenewalSettingsSecurity;
}
export declare class ResellerSubscriptionsChangeRenewalSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscription?: shared.Subscription;
}
