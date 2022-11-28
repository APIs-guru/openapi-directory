import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsServingConfigsRemoveControlPathParams extends SpeakeasyBase {
    servingConfig: string;
}
export declare class RetailProjectsLocationsCatalogsServingConfigsRemoveControlQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsServingConfigsRemoveControlSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsServingConfigsRemoveControlRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsServingConfigsRemoveControlPathParams;
    queryParams: RetailProjectsLocationsCatalogsServingConfigsRemoveControlQueryParams;
    request?: shared.GoogleCloudRetailV2alphaRemoveControlRequest;
    security: RetailProjectsLocationsCatalogsServingConfigsRemoveControlSecurity;
}
export declare class RetailProjectsLocationsCatalogsServingConfigsRemoveControlResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRetailV2alphaServingConfig?: shared.GoogleCloudRetailV2alphaServingConfig;
    statusCode: number;
}
