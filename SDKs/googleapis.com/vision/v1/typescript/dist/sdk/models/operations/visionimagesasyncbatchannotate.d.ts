import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VisionImagesAsyncBatchAnnotateQueryParams extends SpeakeasyBase {
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
export declare class VisionImagesAsyncBatchAnnotateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionImagesAsyncBatchAnnotateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionImagesAsyncBatchAnnotateSecurity extends SpeakeasyBase {
    option1?: VisionImagesAsyncBatchAnnotateSecurityOption1;
    option2?: VisionImagesAsyncBatchAnnotateSecurityOption2;
}
export declare class VisionImagesAsyncBatchAnnotateRequest extends SpeakeasyBase {
    queryParams: VisionImagesAsyncBatchAnnotateQueryParams;
    request?: shared.AsyncBatchAnnotateImagesRequest;
    security: VisionImagesAsyncBatchAnnotateSecurity;
}
export declare class VisionImagesAsyncBatchAnnotateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
