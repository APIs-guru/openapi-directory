import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VisionProjectsLocationsProductsPurgePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VisionProjectsLocationsProductsPurgeQueryParams extends SpeakeasyBase {
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
export declare class VisionProjectsLocationsProductsPurgeSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductsPurgeSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductsPurgeSecurity extends SpeakeasyBase {
    option1?: VisionProjectsLocationsProductsPurgeSecurityOption1;
    option2?: VisionProjectsLocationsProductsPurgeSecurityOption2;
}
export declare class VisionProjectsLocationsProductsPurgeRequest extends SpeakeasyBase {
    pathParams: VisionProjectsLocationsProductsPurgePathParams;
    queryParams: VisionProjectsLocationsProductsPurgeQueryParams;
    request?: shared.PurgeProductsRequest;
    security: VisionProjectsLocationsProductsPurgeSecurity;
}
export declare class VisionProjectsLocationsProductsPurgeResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
