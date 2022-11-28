import { SpeakeasyBase } from "../../../internal/utils";
import { ChaosConfig } from "./chaosconfig";
import { OutageStrategyEnum } from "./outagestrategyenum";
/**
 * Configuration for the faults that can be injected in requests. The name Snow Monkey is an hommage to Netflix's Chaos Monkey 😉
**/
export declare class SnowMonkeyConfig extends SpeakeasyBase {
    chaosConfig: ChaosConfig;
    dryRun: boolean;
    enabled: boolean;
    includeUserFacingDescriptors: boolean;
    outageDurationFrom: number;
    outageDurationTo: number;
    outageStrategy: OutageStrategyEnum;
    startTime: string;
    stopTime: string;
    targetGroups: string[];
    timesPerDay: number;
}
