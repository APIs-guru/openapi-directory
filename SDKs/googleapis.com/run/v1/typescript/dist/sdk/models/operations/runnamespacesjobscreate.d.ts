import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunNamespacesJobsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RunNamespacesJobsCreateQueryParams extends SpeakeasyBase {
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
export declare class RunNamespacesJobsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunNamespacesJobsCreateRequest extends SpeakeasyBase {
    pathParams: RunNamespacesJobsCreatePathParams;
    queryParams: RunNamespacesJobsCreateQueryParams;
    request?: shared.Job;
    security: RunNamespacesJobsCreateSecurity;
}
export declare class RunNamespacesJobsCreateResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
