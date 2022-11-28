import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GkehubProjectsLocationsOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class GkehubProjectsLocationsOperationsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    force?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GkehubProjectsLocationsOperationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkehubProjectsLocationsOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: GkehubProjectsLocationsOperationsDeletePathParams;
    queryParams: GkehubProjectsLocationsOperationsDeleteQueryParams;
    security: GkehubProjectsLocationsOperationsDeleteSecurity;
}
export declare class GkehubProjectsLocationsOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
