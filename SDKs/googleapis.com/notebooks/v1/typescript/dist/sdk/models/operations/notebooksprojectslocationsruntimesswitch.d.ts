import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsRuntimesSwitchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NotebooksProjectsLocationsRuntimesSwitchQueryParams extends SpeakeasyBase {
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
export declare class NotebooksProjectsLocationsRuntimesSwitchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsRuntimesSwitchRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsRuntimesSwitchPathParams;
    queryParams: NotebooksProjectsLocationsRuntimesSwitchQueryParams;
    request?: shared.SwitchRuntimeRequest;
    security: NotebooksProjectsLocationsRuntimesSwitchSecurity;
}
export declare class NotebooksProjectsLocationsRuntimesSwitchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
