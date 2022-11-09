import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsEnvironmentsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NotebooksProjectsLocationsEnvironmentsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    environmentId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NotebooksProjectsLocationsEnvironmentsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsEnvironmentsCreateRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsEnvironmentsCreatePathParams;
    queryParams: NotebooksProjectsLocationsEnvironmentsCreateQueryParams;
    request?: shared.Environment;
    security: NotebooksProjectsLocationsEnvironmentsCreateSecurity;
}
export declare class NotebooksProjectsLocationsEnvironmentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
