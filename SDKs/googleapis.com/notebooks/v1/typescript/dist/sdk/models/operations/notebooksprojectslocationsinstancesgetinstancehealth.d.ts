import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsInstancesGetInstanceHealthPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NotebooksProjectsLocationsInstancesGetInstanceHealthQueryParams extends SpeakeasyBase {
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
export declare class NotebooksProjectsLocationsInstancesGetInstanceHealthSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsInstancesGetInstanceHealthRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsInstancesGetInstanceHealthPathParams;
    queryParams: NotebooksProjectsLocationsInstancesGetInstanceHealthQueryParams;
    security: NotebooksProjectsLocationsInstancesGetInstanceHealthSecurity;
}
export declare class NotebooksProjectsLocationsInstancesGetInstanceHealthResponse extends SpeakeasyBase {
    contentType: string;
    getInstanceHealthResponse?: shared.GetInstanceHealthResponse;
    statusCode: number;
}
