import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributePathParams extends SpeakeasyBase {
    attributesConfig: string;
}
export declare class RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributePathParams;
    queryParams: RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeQueryParams;
    request?: shared.GoogleCloudRetailV2betaRemoveCatalogAttributeRequest;
    security: RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeSecurity;
}
export declare class RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRetailV2betaAttributesConfig?: shared.GoogleCloudRetailV2betaAttributesConfig;
    statusCode: number;
}
