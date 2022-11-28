import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IapUpdateIapSettingsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IapUpdateIapSettingsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IapUpdateIapSettingsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IapUpdateIapSettingsRequest extends SpeakeasyBase {
    pathParams: IapUpdateIapSettingsPathParams;
    queryParams: IapUpdateIapSettingsQueryParams;
    request?: shared.IapSettings;
    security: IapUpdateIapSettingsSecurity;
}
export declare class IapUpdateIapSettingsResponse extends SpeakeasyBase {
    contentType: string;
    iapSettings?: shared.IapSettings;
    statusCode: number;
}
