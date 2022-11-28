import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VisionFilesAsyncBatchAnnotateQueryParams extends SpeakeasyBase {
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
export declare class VisionFilesAsyncBatchAnnotateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionFilesAsyncBatchAnnotateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionFilesAsyncBatchAnnotateSecurity extends SpeakeasyBase {
    option1?: VisionFilesAsyncBatchAnnotateSecurityOption1;
    option2?: VisionFilesAsyncBatchAnnotateSecurityOption2;
}
export declare class VisionFilesAsyncBatchAnnotateRequest extends SpeakeasyBase {
    queryParams: VisionFilesAsyncBatchAnnotateQueryParams;
    request?: shared.AsyncBatchAnnotateFilesRequest;
    security: VisionFilesAsyncBatchAnnotateSecurity;
}
export declare class VisionFilesAsyncBatchAnnotateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
