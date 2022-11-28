import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CircuitsProvidersListQueryParams extends SpeakeasyBase {
    account?: string;
    asn?: number;
    idIn?: string;
    limit?: number;
    name?: string;
    offset?: number;
    q?: string;
    site?: string;
    siteId?: string;
    slug?: string;
    tag?: string;
}
export declare class CircuitsProvidersList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Provider[];
}
export declare class CircuitsProvidersListRequest extends SpeakeasyBase {
    queryParams: CircuitsProvidersListQueryParams;
}
export declare class CircuitsProvidersListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    circuitsProvidersList200ApplicationJsonObject?: CircuitsProvidersList200ApplicationJson;
}
