import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VisionProjectsLocationsFilesAnnotatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VisionProjectsLocationsFilesAnnotateQueryParams extends SpeakeasyBase {
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
export declare class VisionProjectsLocationsFilesAnnotateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsFilesAnnotateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsFilesAnnotateSecurity extends SpeakeasyBase {
    option1?: VisionProjectsLocationsFilesAnnotateSecurityOption1;
    option2?: VisionProjectsLocationsFilesAnnotateSecurityOption2;
}
export declare class VisionProjectsLocationsFilesAnnotateRequest extends SpeakeasyBase {
    pathParams: VisionProjectsLocationsFilesAnnotatePathParams;
    queryParams: VisionProjectsLocationsFilesAnnotateQueryParams;
    request?: shared.GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest;
    security: VisionProjectsLocationsFilesAnnotateSecurity;
}
export declare class VisionProjectsLocationsFilesAnnotateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudVisionV1p2beta1BatchAnnotateFilesResponse?: shared.GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse;
    statusCode: number;
}
