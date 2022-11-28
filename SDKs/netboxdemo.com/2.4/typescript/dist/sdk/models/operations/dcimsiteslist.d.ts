import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimSitesListQueryParams extends SpeakeasyBase {
    asn?: number;
    contactEmail?: string;
    contactName?: string;
    contactPhone?: string;
    facility?: string;
    idIn?: string;
    limit?: number;
    name?: string;
    offset?: number;
    q?: string;
    region?: string;
    regionId?: string;
    slug?: string;
    status?: string;
    tag?: string;
    tenant?: string;
    tenantId?: string;
}
export declare class DcimSitesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Site[];
}
export declare class DcimSitesListRequest extends SpeakeasyBase {
    queryParams: DcimSitesListQueryParams;
}
export declare class DcimSitesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimSitesList200ApplicationJsonObject?: DcimSitesList200ApplicationJson;
}
