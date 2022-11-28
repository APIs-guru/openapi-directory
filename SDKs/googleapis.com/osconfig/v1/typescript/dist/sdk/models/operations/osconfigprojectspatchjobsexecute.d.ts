import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsconfigProjectsPatchJobsExecutePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class OsconfigProjectsPatchJobsExecuteQueryParams extends SpeakeasyBase {
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
export declare class OsconfigProjectsPatchJobsExecuteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsconfigProjectsPatchJobsExecuteRequest extends SpeakeasyBase {
    pathParams: OsconfigProjectsPatchJobsExecutePathParams;
    queryParams: OsconfigProjectsPatchJobsExecuteQueryParams;
    request?: shared.ExecutePatchJobRequest;
    security: OsconfigProjectsPatchJobsExecuteSecurity;
}
export declare class OsconfigProjectsPatchJobsExecuteResponse extends SpeakeasyBase {
    contentType: string;
    patchJob?: shared.PatchJob;
    statusCode: number;
}
