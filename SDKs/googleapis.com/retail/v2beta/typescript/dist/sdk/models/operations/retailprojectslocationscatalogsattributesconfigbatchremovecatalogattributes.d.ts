import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesPathParams extends SpeakeasyBase {
    attributesConfig: string;
}
export declare class RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesPathParams;
    queryParams: RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesQueryParams;
    request?: shared.GoogleCloudRetailV2betaBatchRemoveCatalogAttributesRequest;
    security: RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesSecurity;
}
export declare class RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRetailV2betaBatchRemoveCatalogAttributesResponse?: shared.GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponse;
    statusCode: number;
}
