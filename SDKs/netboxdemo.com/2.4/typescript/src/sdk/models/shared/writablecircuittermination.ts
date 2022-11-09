import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WritableCircuitTerminationTerminationEnum {
    A = "A"
,    Z = "Z"
}


export class WritableCircuitTermination extends SpeakeasyBase {
  @Metadata({ data: "json, name=circuit" })
  circuit: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=interface" })
  interface?: number;

  @Metadata({ data: "json, name=port_speed" })
  portSpeed: number;

  @Metadata({ data: "json, name=pp_info" })
  ppInfo?: string;

  @Metadata({ data: "json, name=site" })
  site: number;

  @Metadata({ data: "json, name=term_side" })
  termSide: WritableCircuitTerminationTerminationEnum;

  @Metadata({ data: "json, name=upstream_speed" })
  upstreamSpeed?: number;

  @Metadata({ data: "json, name=xconnect_id" })
  xconnectId?: string;
}
