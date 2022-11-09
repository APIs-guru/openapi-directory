import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigQueryParams extends SpeakeasyBase {
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
export declare class NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigPathParams;
    queryParams: NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigQueryParams;
    request?: shared.UpdateShieldedInstanceConfigRequest;
    security: NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigSecurity;
}
export declare class NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
