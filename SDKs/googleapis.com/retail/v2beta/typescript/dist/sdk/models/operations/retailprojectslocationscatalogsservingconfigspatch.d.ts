import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsServingConfigsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RetailProjectsLocationsCatalogsServingConfigsPatchQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsServingConfigsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsServingConfigsPatchRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsServingConfigsPatchPathParams;
    queryParams: RetailProjectsLocationsCatalogsServingConfigsPatchQueryParams;
    request?: shared.GoogleCloudRetailV2betaServingConfig;
    security: RetailProjectsLocationsCatalogsServingConfigsPatchSecurity;
}
export declare class RetailProjectsLocationsCatalogsServingConfigsPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRetailV2betaServingConfig?: shared.GoogleCloudRetailV2betaServingConfig;
    statusCode: number;
}
