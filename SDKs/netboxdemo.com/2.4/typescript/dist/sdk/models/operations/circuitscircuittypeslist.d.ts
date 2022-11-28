import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CircuitsCircuitTypesListQueryParams extends SpeakeasyBase {
    limit?: number;
    name?: string;
    offset?: number;
    slug?: string;
}
export declare class CircuitsCircuitTypesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.CircuitType[];
}
export declare class CircuitsCircuitTypesListRequest extends SpeakeasyBase {
    queryParams: CircuitsCircuitTypesListQueryParams;
}
export declare class CircuitsCircuitTypesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    circuitsCircuitTypesList200ApplicationJsonObject?: CircuitsCircuitTypesList200ApplicationJson;
}
