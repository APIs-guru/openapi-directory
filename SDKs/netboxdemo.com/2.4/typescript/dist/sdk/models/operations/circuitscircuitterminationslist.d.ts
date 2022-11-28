import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CircuitsCircuitTerminationsListQueryParams extends SpeakeasyBase {
    circuitId?: string;
    limit?: number;
    offset?: number;
    portSpeed?: number;
    q?: string;
    site?: string;
    siteId?: string;
    termSide?: string;
    upstreamSpeed?: number;
    xconnectId?: string;
}
export declare class CircuitsCircuitTerminationsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.CircuitTermination[];
}
export declare class CircuitsCircuitTerminationsListRequest extends SpeakeasyBase {
    queryParams: CircuitsCircuitTerminationsListQueryParams;
}
export declare class CircuitsCircuitTerminationsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    circuitsCircuitTerminationsList200ApplicationJsonObject?: CircuitsCircuitTerminationsList200ApplicationJson;
}
