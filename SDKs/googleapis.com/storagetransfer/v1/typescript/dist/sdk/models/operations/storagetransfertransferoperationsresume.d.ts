import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StoragetransferTransferOperationsResumePathParams extends SpeakeasyBase {
    name: string;
}
export declare class StoragetransferTransferOperationsResumeQueryParams extends SpeakeasyBase {
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
export declare class StoragetransferTransferOperationsResumeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StoragetransferTransferOperationsResumeRequest extends SpeakeasyBase {
    pathParams: StoragetransferTransferOperationsResumePathParams;
    queryParams: StoragetransferTransferOperationsResumeQueryParams;
    request?: Map<string, any>;
    security: StoragetransferTransferOperationsResumeSecurity;
}
export declare class StoragetransferTransferOperationsResumeResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
