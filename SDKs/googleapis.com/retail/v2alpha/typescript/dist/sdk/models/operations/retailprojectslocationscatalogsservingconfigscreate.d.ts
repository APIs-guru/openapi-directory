import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsServingConfigsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RetailProjectsLocationsCatalogsServingConfigsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    servingConfigId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RetailProjectsLocationsCatalogsServingConfigsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsServingConfigsCreateRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsServingConfigsCreatePathParams;
    queryParams: RetailProjectsLocationsCatalogsServingConfigsCreateQueryParams;
    request?: shared.GoogleCloudRetailV2alphaServingConfig;
    security: RetailProjectsLocationsCatalogsServingConfigsCreateSecurity;
}
export declare class RetailProjectsLocationsCatalogsServingConfigsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRetailV2alphaServingConfig?: shared.GoogleCloudRetailV2alphaServingConfig;
    statusCode: number;
}
