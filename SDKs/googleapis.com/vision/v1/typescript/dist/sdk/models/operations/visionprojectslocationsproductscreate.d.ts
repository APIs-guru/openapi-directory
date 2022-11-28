import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VisionProjectsLocationsProductsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VisionProjectsLocationsProductsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    productId?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class VisionProjectsLocationsProductsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductsCreateSecurity extends SpeakeasyBase {
    option1?: VisionProjectsLocationsProductsCreateSecurityOption1;
    option2?: VisionProjectsLocationsProductsCreateSecurityOption2;
}
export declare class VisionProjectsLocationsProductsCreateRequest extends SpeakeasyBase {
    pathParams: VisionProjectsLocationsProductsCreatePathParams;
    queryParams: VisionProjectsLocationsProductsCreateQueryParams;
    request?: shared.Product;
    security: VisionProjectsLocationsProductsCreateSecurity;
}
export declare class VisionProjectsLocationsProductsCreateResponse extends SpeakeasyBase {
    contentType: string;
    product?: shared.Product;
    statusCode: number;
}
