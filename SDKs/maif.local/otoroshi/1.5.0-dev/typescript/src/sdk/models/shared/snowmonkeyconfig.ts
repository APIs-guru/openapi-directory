import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChaosConfig } from "./chaosconfig";
import { OutageStrategyEnum } from "./outagestrategyenum";



// SnowMonkeyConfig
/** 
 * Configuration for the faults that can be injected in requests. The name Snow Monkey is an hommage to Netflix's Chaos Monkey 😉
**/
export class SnowMonkeyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chaosConfig" })
  chaosConfig: ChaosConfig;

  @SpeakeasyMetadata({ data: "json, name=dryRun" })
  dryRun: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeUserFacingDescriptors" })
  includeUserFacingDescriptors: boolean;

  @SpeakeasyMetadata({ data: "json, name=outageDurationFrom" })
  outageDurationFrom: number;

  @SpeakeasyMetadata({ data: "json, name=outageDurationTo" })
  outageDurationTo: number;

  @SpeakeasyMetadata({ data: "json, name=outageStrategy" })
  outageStrategy: OutageStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime: string;

  @SpeakeasyMetadata({ data: "json, name=stopTime" })
  stopTime: string;

  @SpeakeasyMetadata({ data: "json, name=targetGroups" })
  targetGroups: string[];

  @SpeakeasyMetadata({ data: "json, name=timesPerDay" })
  timesPerDay: number;
}
