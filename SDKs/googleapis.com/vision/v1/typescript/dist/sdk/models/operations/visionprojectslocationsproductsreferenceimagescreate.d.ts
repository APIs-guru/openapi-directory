import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VisionProjectsLocationsProductsReferenceImagesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VisionProjectsLocationsProductsReferenceImagesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    referenceImageId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class VisionProjectsLocationsProductsReferenceImagesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductsReferenceImagesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductsReferenceImagesCreateSecurity extends SpeakeasyBase {
    option1?: VisionProjectsLocationsProductsReferenceImagesCreateSecurityOption1;
    option2?: VisionProjectsLocationsProductsReferenceImagesCreateSecurityOption2;
}
export declare class VisionProjectsLocationsProductsReferenceImagesCreateRequest extends SpeakeasyBase {
    pathParams: VisionProjectsLocationsProductsReferenceImagesCreatePathParams;
    queryParams: VisionProjectsLocationsProductsReferenceImagesCreateQueryParams;
    request?: shared.ReferenceImage;
    security: VisionProjectsLocationsProductsReferenceImagesCreateSecurity;
}
export declare class VisionProjectsLocationsProductsReferenceImagesCreateResponse extends SpeakeasyBase {
    contentType: string;
    referenceImage?: shared.ReferenceImage;
    statusCode: number;
}
