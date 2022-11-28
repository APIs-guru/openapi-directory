import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VisionProjectsLocationsImagesAnnotatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VisionProjectsLocationsImagesAnnotateQueryParams extends SpeakeasyBase {
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
export declare class VisionProjectsLocationsImagesAnnotateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsImagesAnnotateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsImagesAnnotateSecurity extends SpeakeasyBase {
    option1?: VisionProjectsLocationsImagesAnnotateSecurityOption1;
    option2?: VisionProjectsLocationsImagesAnnotateSecurityOption2;
}
export declare class VisionProjectsLocationsImagesAnnotateRequest extends SpeakeasyBase {
    pathParams: VisionProjectsLocationsImagesAnnotatePathParams;
    queryParams: VisionProjectsLocationsImagesAnnotateQueryParams;
    request?: shared.GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest;
    security: VisionProjectsLocationsImagesAnnotateSecurity;
}
export declare class VisionProjectsLocationsImagesAnnotateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudVisionV1p1beta1BatchAnnotateImagesResponse?: shared.GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse;
    statusCode: number;
}
