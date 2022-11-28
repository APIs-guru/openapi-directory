import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StoragetransferTransferJobsCreateQueryParams extends SpeakeasyBase {
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
export declare class StoragetransferTransferJobsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StoragetransferTransferJobsCreateRequest extends SpeakeasyBase {
    queryParams: StoragetransferTransferJobsCreateQueryParams;
    request?: shared.TransferJobInput;
    security: StoragetransferTransferJobsCreateSecurity;
}
export declare class StoragetransferTransferJobsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    transferJob?: shared.TransferJob;
}
