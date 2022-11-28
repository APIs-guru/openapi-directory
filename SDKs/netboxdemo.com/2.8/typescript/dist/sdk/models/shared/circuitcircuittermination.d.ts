import { SpeakeasyBase } from "../../../internal/utils";
import { NestedInterface } from "./nestedinterface";
import { NestedSite } from "./nestedsite";
export declare class CircuitCircuitTermination extends SpeakeasyBase {
    connectedEndpoint: NestedInterface;
    id?: number;
    portSpeed: number;
    site: NestedSite;
    upstreamSpeed?: number;
    url?: string;
    xconnectId?: string;
}
