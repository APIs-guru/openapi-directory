import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolresultsProjectsGetSettingsPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class ToolresultsProjectsGetSettingsQueryParams extends SpeakeasyBase {
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
export declare class ToolresultsProjectsGetSettingsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ToolresultsProjectsGetSettingsRequest extends SpeakeasyBase {
    pathParams: ToolresultsProjectsGetSettingsPathParams;
    queryParams: ToolresultsProjectsGetSettingsQueryParams;
    security: ToolresultsProjectsGetSettingsSecurity;
}
export declare class ToolresultsProjectsGetSettingsResponse extends SpeakeasyBase {
    contentType: string;
    projectSettings?: shared.ProjectSettings;
    statusCode: number;
}
