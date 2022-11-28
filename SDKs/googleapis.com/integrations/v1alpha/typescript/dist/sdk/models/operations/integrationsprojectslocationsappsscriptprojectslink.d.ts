import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsAppsScriptProjectsLinkPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IntegrationsProjectsLocationsAppsScriptProjectsLinkQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsProjectsLocationsAppsScriptProjectsLinkSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsAppsScriptProjectsLinkRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsAppsScriptProjectsLinkPathParams;
    queryParams: IntegrationsProjectsLocationsAppsScriptProjectsLinkQueryParams;
    request?: shared.GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest;
    security: IntegrationsProjectsLocationsAppsScriptProjectsLinkSecurity;
}
export declare class IntegrationsProjectsLocationsAppsScriptProjectsLinkResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaLinkAppsScriptProjectResponse?: shared.GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectResponse;
    statusCode: number;
}
