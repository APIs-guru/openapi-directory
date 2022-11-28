import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VisionProjectsLocationsFilesAsyncBatchAnnotatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VisionProjectsLocationsFilesAsyncBatchAnnotateQueryParams extends SpeakeasyBase {
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
export declare class VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsFilesAsyncBatchAnnotateSecurity extends SpeakeasyBase {
    option1?: VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption1;
    option2?: VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption2;
}
export declare class VisionProjectsLocationsFilesAsyncBatchAnnotateRequest extends SpeakeasyBase {
    pathParams: VisionProjectsLocationsFilesAsyncBatchAnnotatePathParams;
    queryParams: VisionProjectsLocationsFilesAsyncBatchAnnotateQueryParams;
    request?: shared.AsyncBatchAnnotateFilesRequest;
    security: VisionProjectsLocationsFilesAsyncBatchAnnotateSecurity;
}
export declare class VisionProjectsLocationsFilesAsyncBatchAnnotateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
