import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChaosConfig } from "./chaosconfig";
import { OutageStrategyEnum } from "./outagestrategyenum";


// SnowMonkeyConfig
/** 
 * Configuration for the faults that can be injected in requests. The name Snow Monkey is an hommage to Netflix's Chaos Monkey 😉
**/
export class SnowMonkeyConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=chaosConfig" })
  chaosConfig: ChaosConfig;

  @Metadata({ data: "json, name=dryRun" })
  dryRun: boolean;

  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=includeUserFacingDescriptors" })
  includeUserFacingDescriptors: boolean;

  @Metadata({ data: "json, name=outageDurationFrom" })
  outageDurationFrom: number;

  @Metadata({ data: "json, name=outageDurationTo" })
  outageDurationTo: number;

  @Metadata({ data: "json, name=outageStrategy" })
  outageStrategy: OutageStrategyEnum;

  @Metadata({ data: "json, name=startTime" })
  startTime: string;

  @Metadata({ data: "json, name=stopTime" })
  stopTime: string;

  @Metadata({ data: "json, name=targetGroups" })
  targetGroups: string[];

  @Metadata({ data: "json, name=timesPerDay" })
  timesPerDay: number;
}
