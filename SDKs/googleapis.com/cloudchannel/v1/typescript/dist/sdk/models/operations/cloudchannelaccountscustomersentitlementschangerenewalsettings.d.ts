import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsPathParams;
    queryParams: CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsQueryParams;
    request?: shared.GoogleCloudChannelV1ChangeRenewalSettingsRequest;
    security: CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsSecurity;
}
export declare class CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
