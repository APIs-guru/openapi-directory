import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VisionProjectsLocationsImagesAsyncBatchAnnotatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VisionProjectsLocationsImagesAsyncBatchAnnotateQueryParams extends SpeakeasyBase {
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
export declare class VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsImagesAsyncBatchAnnotateSecurity extends SpeakeasyBase {
    option1?: VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption1;
    option2?: VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption2;
}
export declare class VisionProjectsLocationsImagesAsyncBatchAnnotateRequest extends SpeakeasyBase {
    pathParams: VisionProjectsLocationsImagesAsyncBatchAnnotatePathParams;
    queryParams: VisionProjectsLocationsImagesAsyncBatchAnnotateQueryParams;
    request?: shared.AsyncBatchAnnotateImagesRequest;
    security: VisionProjectsLocationsImagesAsyncBatchAnnotateSecurity;
}
export declare class VisionProjectsLocationsImagesAsyncBatchAnnotateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
