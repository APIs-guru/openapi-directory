import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ComposerProjectsLocationsEnvironmentsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ComposerProjectsLocationsEnvironmentsPatchQueryParams extends SpeakeasyBase {
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
export declare class ComposerProjectsLocationsEnvironmentsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ComposerProjectsLocationsEnvironmentsPatchRequest extends SpeakeasyBase {
    pathParams: ComposerProjectsLocationsEnvironmentsPatchPathParams;
    queryParams: ComposerProjectsLocationsEnvironmentsPatchQueryParams;
    request?: shared.EnvironmentInput;
    security: ComposerProjectsLocationsEnvironmentsPatchSecurity;
}
export declare class ComposerProjectsLocationsEnvironmentsPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
