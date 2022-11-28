import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunNamespacesJobsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class RunNamespacesJobsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    apiVersion?: string;
    callback?: string;
    fields?: string;
    key?: string;
    kind?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    propagationPolicy?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RunNamespacesJobsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunNamespacesJobsDeleteRequest extends SpeakeasyBase {
    pathParams: RunNamespacesJobsDeletePathParams;
    queryParams: RunNamespacesJobsDeleteQueryParams;
    security: RunNamespacesJobsDeleteSecurity;
}
export declare class RunNamespacesJobsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
