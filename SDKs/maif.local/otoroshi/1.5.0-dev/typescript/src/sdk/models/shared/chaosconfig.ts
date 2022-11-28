import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BadResponsesFaultConfig } from "./badresponsesfaultconfig";
import { LargeRequestFaultConfig } from "./largerequestfaultconfig";
import { LargeResponseFaultConfig } from "./largeresponsefaultconfig";
import { LatencyInjectionFaultConfig } from "./latencyinjectionfaultconfig";



// ChaosConfig
/** 
 * Configuration for the faults that can be injected in requests
**/
export class ChaosConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=badResponsesFaultConfig" })
  badResponsesFaultConfig?: BadResponsesFaultConfig;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=largeRequestFaultConfig" })
  largeRequestFaultConfig?: LargeRequestFaultConfig;

  @SpeakeasyMetadata({ data: "json, name=largeResponseFaultConfig" })
  largeResponseFaultConfig?: LargeResponseFaultConfig;

  @SpeakeasyMetadata({ data: "json, name=latencyInjectionFaultConfig" })
  latencyInjectionFaultConfig?: LatencyInjectionFaultConfig;
}
