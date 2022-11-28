import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResourcesettingsProjectsSettingsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum ResourcesettingsProjectsSettingsListViewEnum {
    SettingViewUnspecified = "SETTING_VIEW_UNSPECIFIED",
    SettingViewBasic = "SETTING_VIEW_BASIC",
    SettingViewEffectiveValue = "SETTING_VIEW_EFFECTIVE_VALUE",
    SettingViewLocalValue = "SETTING_VIEW_LOCAL_VALUE"
}
export declare class ResourcesettingsProjectsSettingsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: ResourcesettingsProjectsSettingsListViewEnum;
}
export declare class ResourcesettingsProjectsSettingsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ResourcesettingsProjectsSettingsListRequest extends SpeakeasyBase {
    pathParams: ResourcesettingsProjectsSettingsListPathParams;
    queryParams: ResourcesettingsProjectsSettingsListQueryParams;
    security: ResourcesettingsProjectsSettingsListSecurity;
}
export declare class ResourcesettingsProjectsSettingsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudResourcesettingsV1ListSettingsResponse?: shared.GoogleCloudResourcesettingsV1ListSettingsResponse;
    statusCode: number;
}
