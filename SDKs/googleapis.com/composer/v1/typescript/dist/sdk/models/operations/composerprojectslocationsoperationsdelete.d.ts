import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ComposerProjectsLocationsOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ComposerProjectsLocationsOperationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class ComposerProjectsLocationsOperationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ComposerProjectsLocationsOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: ComposerProjectsLocationsOperationsDeletePathParams;
    queryParams: ComposerProjectsLocationsOperationsDeleteQueryParams;
    security: ComposerProjectsLocationsOperationsDeleteSecurity;
}
export declare class ComposerProjectsLocationsOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
