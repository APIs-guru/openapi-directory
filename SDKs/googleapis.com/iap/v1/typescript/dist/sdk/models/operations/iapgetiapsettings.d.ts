import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IapGetIapSettingsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IapGetIapSettingsQueryParams extends SpeakeasyBase {
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
export declare class IapGetIapSettingsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IapGetIapSettingsRequest extends SpeakeasyBase {
    pathParams: IapGetIapSettingsPathParams;
    queryParams: IapGetIapSettingsQueryParams;
    security: IapGetIapSettingsSecurity;
}
export declare class IapGetIapSettingsResponse extends SpeakeasyBase {
    contentType: string;
    iapSettings?: shared.IapSettings;
    statusCode: number;
}
