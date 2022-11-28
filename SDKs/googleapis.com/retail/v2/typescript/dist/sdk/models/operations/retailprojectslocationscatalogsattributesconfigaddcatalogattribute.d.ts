import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributePathParams extends SpeakeasyBase {
    attributesConfig: string;
}
export declare class RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributePathParams;
    queryParams: RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeQueryParams;
    request?: shared.GoogleCloudRetailV2AddCatalogAttributeRequestInput;
    security: RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity;
}
export declare class RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRetailV2AttributesConfig?: shared.GoogleCloudRetailV2AttributesConfig;
    statusCode: number;
}
