import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StoragetransferTransferJobsRunPathParams extends SpeakeasyBase {
    jobName: string;
}
export declare class StoragetransferTransferJobsRunQueryParams extends SpeakeasyBase {
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
export declare class StoragetransferTransferJobsRunSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StoragetransferTransferJobsRunRequest extends SpeakeasyBase {
    pathParams: StoragetransferTransferJobsRunPathParams;
    queryParams: StoragetransferTransferJobsRunQueryParams;
    request?: shared.RunTransferJobRequest;
    security: StoragetransferTransferJobsRunSecurity;
}
export declare class StoragetransferTransferJobsRunResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
