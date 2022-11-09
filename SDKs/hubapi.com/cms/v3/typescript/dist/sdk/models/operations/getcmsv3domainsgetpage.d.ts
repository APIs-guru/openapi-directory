import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetCmsV3DomainsGetPageQueryParams extends SpeakeasyBase {
    after?: string;
    archived?: boolean;
    before?: string;
    createdAfter?: number;
    createdAt?: number;
    createdBefore?: number;
    limit?: number;
    properties?: string[];
    sort?: string[];
    updatedAfter?: number;
    updatedAt?: number;
    updatedBefore?: number;
}
export declare class GetCmsV3DomainsGetPageSecurity extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class GetCmsV3DomainsGetPageRequest extends SpeakeasyBase {
    queryParams: GetCmsV3DomainsGetPageQueryParams;
    security: GetCmsV3DomainsGetPageSecurity;
}
export declare class GetCmsV3DomainsGetPageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    collectionResponseWithTotalDomain?: shared.CollectionResponseWithTotalDomain;
    contentType: string;
    statusCode: number;
}
