import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VisionProjectsLocationsProductsReferenceImagesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VisionProjectsLocationsProductsReferenceImagesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class VisionProjectsLocationsProductsReferenceImagesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductsReferenceImagesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductsReferenceImagesListSecurity extends SpeakeasyBase {
    option1?: VisionProjectsLocationsProductsReferenceImagesListSecurityOption1;
    option2?: VisionProjectsLocationsProductsReferenceImagesListSecurityOption2;
}
export declare class VisionProjectsLocationsProductsReferenceImagesListRequest extends SpeakeasyBase {
    pathParams: VisionProjectsLocationsProductsReferenceImagesListPathParams;
    queryParams: VisionProjectsLocationsProductsReferenceImagesListQueryParams;
    security: VisionProjectsLocationsProductsReferenceImagesListSecurity;
}
export declare class VisionProjectsLocationsProductsReferenceImagesListResponse extends SpeakeasyBase {
    contentType: string;
    listReferenceImagesResponse?: shared.ListReferenceImagesResponse;
    statusCode: number;
}
