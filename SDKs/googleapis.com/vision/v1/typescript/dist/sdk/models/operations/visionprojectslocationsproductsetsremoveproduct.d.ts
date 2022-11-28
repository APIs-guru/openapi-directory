import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VisionProjectsLocationsProductSetsRemoveProductPathParams extends SpeakeasyBase {
    name: string;
}
export declare class VisionProjectsLocationsProductSetsRemoveProductQueryParams extends SpeakeasyBase {
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
export declare class VisionProjectsLocationsProductSetsRemoveProductSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductSetsRemoveProductSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductSetsRemoveProductSecurity extends SpeakeasyBase {
    option1?: VisionProjectsLocationsProductSetsRemoveProductSecurityOption1;
    option2?: VisionProjectsLocationsProductSetsRemoveProductSecurityOption2;
}
export declare class VisionProjectsLocationsProductSetsRemoveProductRequest extends SpeakeasyBase {
    pathParams: VisionProjectsLocationsProductSetsRemoveProductPathParams;
    queryParams: VisionProjectsLocationsProductSetsRemoveProductQueryParams;
    request?: shared.RemoveProductFromProductSetRequest;
    security: VisionProjectsLocationsProductSetsRemoveProductSecurity;
}
export declare class VisionProjectsLocationsProductSetsRemoveProductResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
