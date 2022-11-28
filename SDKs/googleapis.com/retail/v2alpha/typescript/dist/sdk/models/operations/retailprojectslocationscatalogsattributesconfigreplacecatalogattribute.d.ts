import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributePathParams extends SpeakeasyBase {
    attributesConfig: string;
}
export declare class RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributePathParams;
    queryParams: RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeQueryParams;
    request?: shared.GoogleCloudRetailV2alphaReplaceCatalogAttributeRequestInput;
    security: RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeSecurity;
}
export declare class RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRetailV2alphaAttributesConfig?: shared.GoogleCloudRetailV2alphaAttributesConfig;
    statusCode: number;
}
