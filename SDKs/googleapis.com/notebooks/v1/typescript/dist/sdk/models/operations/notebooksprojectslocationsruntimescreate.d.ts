import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsRuntimesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NotebooksProjectsLocationsRuntimesCreateQueryParams extends SpeakeasyBase {
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
    runtimeId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NotebooksProjectsLocationsRuntimesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsRuntimesCreateRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsRuntimesCreatePathParams;
    queryParams: NotebooksProjectsLocationsRuntimesCreateQueryParams;
    request?: shared.RuntimeInput;
    security: NotebooksProjectsLocationsRuntimesCreateSecurity;
}
export declare class NotebooksProjectsLocationsRuntimesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
