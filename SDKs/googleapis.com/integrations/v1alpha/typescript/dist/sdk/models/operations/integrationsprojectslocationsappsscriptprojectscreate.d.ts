import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsAppsScriptProjectsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IntegrationsProjectsLocationsAppsScriptProjectsCreateQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsProjectsLocationsAppsScriptProjectsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsAppsScriptProjectsCreateRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsAppsScriptProjectsCreatePathParams;
    queryParams: IntegrationsProjectsLocationsAppsScriptProjectsCreateQueryParams;
    request?: shared.GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest;
    security: IntegrationsProjectsLocationsAppsScriptProjectsCreateSecurity;
}
export declare class IntegrationsProjectsLocationsAppsScriptProjectsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaCreateAppsScriptProjectResponse?: shared.GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectResponse;
    statusCode: number;
}
