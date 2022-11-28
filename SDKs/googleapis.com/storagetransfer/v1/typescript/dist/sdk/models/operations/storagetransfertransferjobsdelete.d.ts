import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StoragetransferTransferJobsDeletePathParams extends SpeakeasyBase {
    jobName: string;
}
export declare class StoragetransferTransferJobsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projectId: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class StoragetransferTransferJobsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StoragetransferTransferJobsDeleteRequest extends SpeakeasyBase {
    pathParams: StoragetransferTransferJobsDeletePathParams;
    queryParams: StoragetransferTransferJobsDeleteQueryParams;
    security: StoragetransferTransferJobsDeleteSecurity;
}
export declare class StoragetransferTransferJobsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
