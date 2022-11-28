import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StoragetransferTransferJobsGetPathParams extends SpeakeasyBase {
    jobName: string;
}
export declare class StoragetransferTransferJobsGetQueryParams extends SpeakeasyBase {
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
export declare class StoragetransferTransferJobsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StoragetransferTransferJobsGetRequest extends SpeakeasyBase {
    pathParams: StoragetransferTransferJobsGetPathParams;
    queryParams: StoragetransferTransferJobsGetQueryParams;
    security: StoragetransferTransferJobsGetSecurity;
}
export declare class StoragetransferTransferJobsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    transferJob?: shared.TransferJob;
}
