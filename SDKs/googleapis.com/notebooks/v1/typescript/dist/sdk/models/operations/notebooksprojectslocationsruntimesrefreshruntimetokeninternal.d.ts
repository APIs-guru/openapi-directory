import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalQueryParams extends SpeakeasyBase {
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
export declare class NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalPathParams;
    queryParams: NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalQueryParams;
    request?: shared.RefreshRuntimeTokenInternalRequest;
    security: NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalSecurity;
}
export declare class NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalResponse extends SpeakeasyBase {
    contentType: string;
    refreshRuntimeTokenInternalResponse?: shared.RefreshRuntimeTokenInternalResponse;
    statusCode: number;
}
