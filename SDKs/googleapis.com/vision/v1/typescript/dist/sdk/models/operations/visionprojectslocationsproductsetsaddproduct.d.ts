import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VisionProjectsLocationsProductSetsAddProductPathParams extends SpeakeasyBase {
    name: string;
}
export declare class VisionProjectsLocationsProductSetsAddProductQueryParams extends SpeakeasyBase {
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
export declare class VisionProjectsLocationsProductSetsAddProductSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductSetsAddProductSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductSetsAddProductSecurity extends SpeakeasyBase {
    option1?: VisionProjectsLocationsProductSetsAddProductSecurityOption1;
    option2?: VisionProjectsLocationsProductSetsAddProductSecurityOption2;
}
export declare class VisionProjectsLocationsProductSetsAddProductRequest extends SpeakeasyBase {
    pathParams: VisionProjectsLocationsProductSetsAddProductPathParams;
    queryParams: VisionProjectsLocationsProductSetsAddProductQueryParams;
    request?: shared.AddProductToProductSetRequest;
    security: VisionProjectsLocationsProductSetsAddProductSecurity;
}
export declare class VisionProjectsLocationsProductSetsAddProductResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
