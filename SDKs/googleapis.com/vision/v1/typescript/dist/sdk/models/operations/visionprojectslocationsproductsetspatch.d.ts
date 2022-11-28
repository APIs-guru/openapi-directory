import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VisionProjectsLocationsProductSetsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class VisionProjectsLocationsProductSetsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class VisionProjectsLocationsProductSetsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductSetsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductSetsPatchSecurity extends SpeakeasyBase {
    option1?: VisionProjectsLocationsProductSetsPatchSecurityOption1;
    option2?: VisionProjectsLocationsProductSetsPatchSecurityOption2;
}
export declare class VisionProjectsLocationsProductSetsPatchRequest extends SpeakeasyBase {
    pathParams: VisionProjectsLocationsProductSetsPatchPathParams;
    queryParams: VisionProjectsLocationsProductSetsPatchQueryParams;
    request?: shared.ProductSetInput;
    security: VisionProjectsLocationsProductSetsPatchSecurity;
}
export declare class VisionProjectsLocationsProductSetsPatchResponse extends SpeakeasyBase {
    contentType: string;
    productSet?: shared.ProductSet;
    statusCode: number;
}
