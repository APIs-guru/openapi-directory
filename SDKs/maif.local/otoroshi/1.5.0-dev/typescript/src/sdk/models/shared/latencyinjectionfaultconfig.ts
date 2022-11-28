import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LatencyInjectionFaultConfig
/** 
 * Config for large latency injection fault
**/
export class LatencyInjectionFaultConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from: number;

  @SpeakeasyMetadata({ data: "json, name=ratio" })
  ratio: number;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: number;
}
