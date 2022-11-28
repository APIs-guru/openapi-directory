import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ComposerProjectsLocationsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ComposerProjectsLocationsOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class ComposerProjectsLocationsOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ComposerProjectsLocationsOperationsGetRequest extends SpeakeasyBase {
    pathParams: ComposerProjectsLocationsOperationsGetPathParams;
    queryParams: ComposerProjectsLocationsOperationsGetQueryParams;
    security: ComposerProjectsLocationsOperationsGetSecurity;
}
export declare class ComposerProjectsLocationsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
