import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VisionProjectsLocationsProductSetsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class VisionProjectsLocationsProductSetsDeleteQueryParams extends SpeakeasyBase {
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
export declare class VisionProjectsLocationsProductSetsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductSetsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductSetsDeleteSecurity extends SpeakeasyBase {
    option1?: VisionProjectsLocationsProductSetsDeleteSecurityOption1;
    option2?: VisionProjectsLocationsProductSetsDeleteSecurityOption2;
}
export declare class VisionProjectsLocationsProductSetsDeleteRequest extends SpeakeasyBase {
    pathParams: VisionProjectsLocationsProductSetsDeletePathParams;
    queryParams: VisionProjectsLocationsProductSetsDeleteQueryParams;
    security: VisionProjectsLocationsProductSetsDeleteSecurity;
}
export declare class VisionProjectsLocationsProductSetsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
