import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CircuitsCircuitTerminationsListQueryParams extends SpeakeasyBase {
    circuitId?: string;
    circuitIdN?: string;
    limit?: number;
    offset?: number;
    portSpeed?: string;
    portSpeedGt?: string;
    portSpeedGte?: string;
    portSpeedLt?: string;
    portSpeedLte?: string;
    portSpeedN?: string;
    q?: string;
    site?: string;
    siteN?: string;
    siteId?: string;
    siteIdN?: string;
    termSide?: string;
    termSideN?: string;
    upstreamSpeed?: string;
    upstreamSpeedGt?: string;
    upstreamSpeedGte?: string;
    upstreamSpeedLt?: string;
    upstreamSpeedLte?: string;
    upstreamSpeedN?: string;
    xconnectId?: string;
    xconnectIdIc?: string;
    xconnectIdIe?: string;
    xconnectIdIew?: string;
    xconnectIdIsw?: string;
    xconnectIdN?: string;
    xconnectIdNic?: string;
    xconnectIdNie?: string;
    xconnectIdNiew?: string;
    xconnectIdNisw?: string;
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
