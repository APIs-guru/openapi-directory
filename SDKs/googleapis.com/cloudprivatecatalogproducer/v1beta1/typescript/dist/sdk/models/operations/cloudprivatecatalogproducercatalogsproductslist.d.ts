import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudprivatecatalogproducerCatalogsProductsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudprivatecatalogproducerCatalogsProductsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudprivatecatalogproducerCatalogsProductsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudprivatecatalogproducerCatalogsProductsListRequest extends SpeakeasyBase {
    pathParams: CloudprivatecatalogproducerCatalogsProductsListPathParams;
    queryParams: CloudprivatecatalogproducerCatalogsProductsListQueryParams;
    security: CloudprivatecatalogproducerCatalogsProductsListSecurity;
}
export declare class CloudprivatecatalogproducerCatalogsProductsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
