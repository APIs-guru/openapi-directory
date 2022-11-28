import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCmsV3DomainsGetPageQueryParams extends SpeakeasyBase {
    after?: string;
    archived?: boolean;
    createdAfter?: Date;
    createdAt?: Date;
    createdBefore?: Date;
    limit?: number;
    sort?: string[];
    updatedAfter?: Date;
    updatedAt?: Date;
    updatedBefore?: Date;
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
    collectionResponseWithTotalDomainForwardPaging?: shared.CollectionResponseWithTotalDomainForwardPaging;
    contentType: string;
    statusCode: number;
}
