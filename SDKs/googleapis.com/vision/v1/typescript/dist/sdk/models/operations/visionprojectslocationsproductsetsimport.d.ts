import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VisionProjectsLocationsProductSetsImportPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VisionProjectsLocationsProductSetsImportQueryParams extends SpeakeasyBase {
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
export declare class VisionProjectsLocationsProductSetsImportSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductSetsImportSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductSetsImportSecurity extends SpeakeasyBase {
    option1?: VisionProjectsLocationsProductSetsImportSecurityOption1;
    option2?: VisionProjectsLocationsProductSetsImportSecurityOption2;
}
export declare class VisionProjectsLocationsProductSetsImportRequest extends SpeakeasyBase {
    pathParams: VisionProjectsLocationsProductSetsImportPathParams;
    queryParams: VisionProjectsLocationsProductSetsImportQueryParams;
    request?: shared.ImportProductSetsRequest;
    security: VisionProjectsLocationsProductSetsImportSecurity;
}
export declare class VisionProjectsLocationsProductSetsImportResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
