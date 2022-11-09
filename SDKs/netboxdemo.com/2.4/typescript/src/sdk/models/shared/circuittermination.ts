import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedCircuit } from "./nestedcircuit";
import { NestedInterface } from "./nestedinterface";
import { NestedSite } from "./nestedsite";

export enum CircuitTerminationTerminationEnum {
    A = "A"
,    Z = "Z"
}


export class CircuitTermination extends SpeakeasyBase {
  @Metadata({ data: "json, name=circuit" })
  circuit: NestedCircuit;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=interface" })
  interface?: NestedInterface;

  @Metadata({ data: "json, name=port_speed" })
  portSpeed: number;

  @Metadata({ data: "json, name=pp_info" })
  ppInfo?: string;

  @Metadata({ data: "json, name=site" })
  site: NestedSite;

  @Metadata({ data: "json, name=term_side" })
  termSide: CircuitTerminationTerminationEnum;

  @Metadata({ data: "json, name=upstream_speed" })
  upstreamSpeed?: number;

  @Metadata({ data: "json, name=xconnect_id" })
  xconnectId?: string;
}
