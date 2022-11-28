import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsExecutionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NotebooksProjectsLocationsExecutionsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    executionId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NotebooksProjectsLocationsExecutionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsExecutionsCreateRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsExecutionsCreatePathParams;
    queryParams: NotebooksProjectsLocationsExecutionsCreateQueryParams;
    request?: shared.ExecutionInput;
    security: NotebooksProjectsLocationsExecutionsCreateSecurity;
}
export declare class NotebooksProjectsLocationsExecutionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
