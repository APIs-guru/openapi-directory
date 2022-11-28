import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ComposerProjectsLocationsEnvironmentsRestartWebServerPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ComposerProjectsLocationsEnvironmentsRestartWebServerQueryParams extends SpeakeasyBase {
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
export declare class ComposerProjectsLocationsEnvironmentsRestartWebServerSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ComposerProjectsLocationsEnvironmentsRestartWebServerRequest extends SpeakeasyBase {
    pathParams: ComposerProjectsLocationsEnvironmentsRestartWebServerPathParams;
    queryParams: ComposerProjectsLocationsEnvironmentsRestartWebServerQueryParams;
    request?: Map<string, any>;
    security: ComposerProjectsLocationsEnvironmentsRestartWebServerSecurity;
}
export declare class ComposerProjectsLocationsEnvironmentsRestartWebServerResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
