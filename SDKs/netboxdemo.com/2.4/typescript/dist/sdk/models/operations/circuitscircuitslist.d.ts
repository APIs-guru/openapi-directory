import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CircuitsCircuitsListQueryParams extends SpeakeasyBase {
    cid?: string;
    commitRate?: number;
    idIn?: string;
    installDate?: string;
    limit?: number;
    offset?: number;
    provider?: string;
    providerId?: string;
    q?: string;
    site?: string;
    siteId?: string;
    status?: string;
    tag?: string;
    tenant?: string;
    tenantId?: string;
    type?: string;
    typeId?: string;
}
export declare class CircuitsCircuitsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Circuit[];
}
export declare class CircuitsCircuitsListRequest extends SpeakeasyBase {
    queryParams: CircuitsCircuitsListQueryParams;
}
export declare class CircuitsCircuitsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    circuitsCircuitsList200ApplicationJsonObject?: CircuitsCircuitsList200ApplicationJson;
}
