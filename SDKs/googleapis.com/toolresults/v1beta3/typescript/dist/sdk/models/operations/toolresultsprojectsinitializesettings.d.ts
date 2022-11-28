import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolresultsProjectsInitializeSettingsPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class ToolresultsProjectsInitializeSettingsQueryParams extends SpeakeasyBase {
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
export declare class ToolresultsProjectsInitializeSettingsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ToolresultsProjectsInitializeSettingsRequest extends SpeakeasyBase {
    pathParams: ToolresultsProjectsInitializeSettingsPathParams;
    queryParams: ToolresultsProjectsInitializeSettingsQueryParams;
    security: ToolresultsProjectsInitializeSettingsSecurity;
}
export declare class ToolresultsProjectsInitializeSettingsResponse extends SpeakeasyBase {
    contentType: string;
    projectSettings?: shared.ProjectSettings;
    statusCode: number;
}
