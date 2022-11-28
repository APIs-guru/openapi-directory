import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicebrokerProjectsBrokersV2CatalogListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicebrokerProjectsBrokersV2CatalogListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ServicebrokerProjectsBrokersV2CatalogListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicebrokerProjectsBrokersV2CatalogListRequest extends SpeakeasyBase {
    pathParams: ServicebrokerProjectsBrokersV2CatalogListPathParams;
    queryParams: ServicebrokerProjectsBrokersV2CatalogListQueryParams;
    security: ServicebrokerProjectsBrokersV2CatalogListSecurity;
}
export declare class ServicebrokerProjectsBrokersV2CatalogListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
