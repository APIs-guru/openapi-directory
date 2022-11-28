import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Network emulation parameters.
**/
export declare class TrafficRule extends SpeakeasyBase {
    bandwidth?: number;
    burst?: number;
    delay?: string;
    packetDuplicationRatio?: number;
    packetLossRatio?: number;
}
