import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InterfaceNestedCircuit } from "./interfacenestedcircuit";

export enum InterfaceCircuitTerminationTerminationEnum {
    A = "A"
,    Z = "Z"
}


export class InterfaceCircuitTermination extends SpeakeasyBase {
  @Metadata({ data: "json, name=circuit" })
  circuit?: InterfaceNestedCircuit;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=port_speed" })
  portSpeed: number;

  @Metadata({ data: "json, name=pp_info" })
  ppInfo?: string;

  @Metadata({ data: "json, name=term_side" })
  termSide: InterfaceCircuitTerminationTerminationEnum;

  @Metadata({ data: "json, name=upstream_speed" })
  upstreamSpeed?: number;

  @Metadata({ data: "json, name=xconnect_id" })
  xconnectId?: string;
}
