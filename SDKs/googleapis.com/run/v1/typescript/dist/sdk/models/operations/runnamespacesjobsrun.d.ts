import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunNamespacesJobsRunPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RunNamespacesJobsRunQueryParams extends SpeakeasyBase {
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
export declare class RunNamespacesJobsRunSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunNamespacesJobsRunRequest extends SpeakeasyBase {
    pathParams: RunNamespacesJobsRunPathParams;
    queryParams: RunNamespacesJobsRunQueryParams;
    request?: Map<string, any>;
    security: RunNamespacesJobsRunSecurity;
}
export declare class RunNamespacesJobsRunResponse extends SpeakeasyBase {
    contentType: string;
    execution?: shared.Execution;
    statusCode: number;
}
