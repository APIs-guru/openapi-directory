import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VisionProjectsLocationsProductSetsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VisionProjectsLocationsProductSetsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    productSetId?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class VisionProjectsLocationsProductSetsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductSetsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductSetsCreateSecurity extends SpeakeasyBase {
    option1?: VisionProjectsLocationsProductSetsCreateSecurityOption1;
    option2?: VisionProjectsLocationsProductSetsCreateSecurityOption2;
}
export declare class VisionProjectsLocationsProductSetsCreateRequest extends SpeakeasyBase {
    pathParams: VisionProjectsLocationsProductSetsCreatePathParams;
    queryParams: VisionProjectsLocationsProductSetsCreateQueryParams;
    request?: shared.ProductSetInput;
    security: VisionProjectsLocationsProductSetsCreateSecurity;
}
export declare class VisionProjectsLocationsProductSetsCreateResponse extends SpeakeasyBase {
    contentType: string;
    productSet?: shared.ProductSet;
    statusCode: number;
}
