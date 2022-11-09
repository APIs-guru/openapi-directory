import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BadResponsesFaultConfig } from "./badresponsesfaultconfig";
import { LargeRequestFaultConfig } from "./largerequestfaultconfig";
import { LargeResponseFaultConfig } from "./largeresponsefaultconfig";
import { LatencyInjectionFaultConfig } from "./latencyinjectionfaultconfig";


// ChaosConfig
/** 
 * Configuration for the faults that can be injected in requests
**/
export class ChaosConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=badResponsesFaultConfig" })
  badResponsesFaultConfig?: BadResponsesFaultConfig;

  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=largeRequestFaultConfig" })
  largeRequestFaultConfig?: LargeRequestFaultConfig;

  @Metadata({ data: "json, name=largeResponseFaultConfig" })
  largeResponseFaultConfig?: LargeResponseFaultConfig;

  @Metadata({ data: "json, name=latencyInjectionFaultConfig" })
  latencyInjectionFaultConfig?: LatencyInjectionFaultConfig;
}
