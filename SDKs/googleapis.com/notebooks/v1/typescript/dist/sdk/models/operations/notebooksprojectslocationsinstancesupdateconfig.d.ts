import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsInstancesUpdateConfigPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NotebooksProjectsLocationsInstancesUpdateConfigQueryParams extends SpeakeasyBase {
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
export declare class NotebooksProjectsLocationsInstancesUpdateConfigSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsInstancesUpdateConfigRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsInstancesUpdateConfigPathParams;
    queryParams: NotebooksProjectsLocationsInstancesUpdateConfigQueryParams;
    request?: shared.UpdateInstanceConfigRequest;
    security: NotebooksProjectsLocationsInstancesUpdateConfigSecurity;
}
export declare class NotebooksProjectsLocationsInstancesUpdateConfigResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
