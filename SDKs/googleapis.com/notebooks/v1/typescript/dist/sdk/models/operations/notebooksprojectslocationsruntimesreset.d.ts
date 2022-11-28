import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsRuntimesResetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NotebooksProjectsLocationsRuntimesResetQueryParams extends SpeakeasyBase {
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
export declare class NotebooksProjectsLocationsRuntimesResetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsRuntimesResetRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsRuntimesResetPathParams;
    queryParams: NotebooksProjectsLocationsRuntimesResetQueryParams;
    request?: shared.ResetRuntimeRequest;
    security: NotebooksProjectsLocationsRuntimesResetSecurity;
}
export declare class NotebooksProjectsLocationsRuntimesResetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
