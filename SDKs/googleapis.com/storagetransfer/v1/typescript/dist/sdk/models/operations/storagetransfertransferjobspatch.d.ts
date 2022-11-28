import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StoragetransferTransferJobsPatchPathParams extends SpeakeasyBase {
    jobName: string;
}
export declare class StoragetransferTransferJobsPatchQueryParams extends SpeakeasyBase {
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
export declare class StoragetransferTransferJobsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StoragetransferTransferJobsPatchRequest extends SpeakeasyBase {
    pathParams: StoragetransferTransferJobsPatchPathParams;
    queryParams: StoragetransferTransferJobsPatchQueryParams;
    request?: shared.UpdateTransferJobRequestInput;
    security: StoragetransferTransferJobsPatchSecurity;
}
export declare class StoragetransferTransferJobsPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    transferJob?: shared.TransferJob;
}
