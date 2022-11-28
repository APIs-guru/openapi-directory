import { SpeakeasyBase } from "../../../internal/utils";
import { BadResponsesFaultConfig } from "./badresponsesfaultconfig";
import { LargeRequestFaultConfig } from "./largerequestfaultconfig";
import { LargeResponseFaultConfig } from "./largeresponsefaultconfig";
import { LatencyInjectionFaultConfig } from "./latencyinjectionfaultconfig";
/**
 * Configuration for the faults that can be injected in requests
**/
export declare class ChaosConfig extends SpeakeasyBase {
    badResponsesFaultConfig?: BadResponsesFaultConfig;
    enabled: boolean;
    largeRequestFaultConfig?: LargeRequestFaultConfig;
    largeResponseFaultConfig?: LargeResponseFaultConfig;
    latencyInjectionFaultConfig?: LatencyInjectionFaultConfig;
}
