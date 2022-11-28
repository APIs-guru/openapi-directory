import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsRuntimesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NotebooksProjectsLocationsRuntimesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NotebooksProjectsLocationsRuntimesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsRuntimesPatchRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsRuntimesPatchPathParams;
    queryParams: NotebooksProjectsLocationsRuntimesPatchQueryParams;
    request?: shared.RuntimeInput;
    security: NotebooksProjectsLocationsRuntimesPatchSecurity;
}
export declare class NotebooksProjectsLocationsRuntimesPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
