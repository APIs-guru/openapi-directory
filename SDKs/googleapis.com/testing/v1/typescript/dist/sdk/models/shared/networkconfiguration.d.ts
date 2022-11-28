import { SpeakeasyBase } from "../../../internal/utils";
import { TrafficRule } from "./trafficrule";
export declare class NetworkConfiguration extends SpeakeasyBase {
    downRule?: TrafficRule;
    id?: string;
    upRule?: TrafficRule;
}
