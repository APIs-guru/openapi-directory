import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResourcesettingsProjectsSettingsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ResourcesettingsProjectsSettingsPatchQueryParams extends SpeakeasyBase {
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
export declare class ResourcesettingsProjectsSettingsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ResourcesettingsProjectsSettingsPatchRequest extends SpeakeasyBase {
    pathParams: ResourcesettingsProjectsSettingsPatchPathParams;
    queryParams: ResourcesettingsProjectsSettingsPatchQueryParams;
    request?: shared.GoogleCloudResourcesettingsV1Setting;
    security: ResourcesettingsProjectsSettingsPatchSecurity;
}
export declare class ResourcesettingsProjectsSettingsPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudResourcesettingsV1Setting?: shared.GoogleCloudResourcesettingsV1Setting;
    statusCode: number;
}
