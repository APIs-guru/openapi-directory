import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsRuntimesStopPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NotebooksProjectsLocationsRuntimesStopQueryParams extends SpeakeasyBase {
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
export declare class NotebooksProjectsLocationsRuntimesStopSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsRuntimesStopRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsRuntimesStopPathParams;
    queryParams: NotebooksProjectsLocationsRuntimesStopQueryParams;
    request?: shared.StopRuntimeRequest;
    security: NotebooksProjectsLocationsRuntimesStopSecurity;
}
export declare class NotebooksProjectsLocationsRuntimesStopResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
