import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResourcesettingsProjectsSettingsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum ResourcesettingsProjectsSettingsGetViewEnum {
    SettingViewUnspecified = "SETTING_VIEW_UNSPECIFIED",
    SettingViewBasic = "SETTING_VIEW_BASIC",
    SettingViewEffectiveValue = "SETTING_VIEW_EFFECTIVE_VALUE",
    SettingViewLocalValue = "SETTING_VIEW_LOCAL_VALUE"
}
export declare class ResourcesettingsProjectsSettingsGetQueryParams extends SpeakeasyBase {
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
    view?: ResourcesettingsProjectsSettingsGetViewEnum;
}
export declare class ResourcesettingsProjectsSettingsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ResourcesettingsProjectsSettingsGetRequest extends SpeakeasyBase {
    pathParams: ResourcesettingsProjectsSettingsGetPathParams;
    queryParams: ResourcesettingsProjectsSettingsGetQueryParams;
    security: ResourcesettingsProjectsSettingsGetSecurity;
}
export declare class ResourcesettingsProjectsSettingsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudResourcesettingsV1Setting?: shared.GoogleCloudResourcesettingsV1Setting;
    statusCode: number;
}
