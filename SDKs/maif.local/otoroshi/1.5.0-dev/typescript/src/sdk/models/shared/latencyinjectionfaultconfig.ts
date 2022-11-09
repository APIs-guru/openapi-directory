import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LatencyInjectionFaultConfig
/** 
 * Config for large latency injection fault
**/
export class LatencyInjectionFaultConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=from" })
  from: number;

  @Metadata({ data: "json, name=ratio" })
  ratio: number;

  @Metadata({ data: "json, name=to" })
  to: number;
}
