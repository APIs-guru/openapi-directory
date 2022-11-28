import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InterfaceNestedCircuit } from "./interfacenestedcircuit";


export enum InterfaceCircuitTerminationTerminationEnum {
    A = "A",
    Z = "Z"
}


export class InterfaceCircuitTermination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=circuit" })
  circuit?: InterfaceNestedCircuit;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=port_speed" })
  portSpeed: number;

  @SpeakeasyMetadata({ data: "json, name=pp_info" })
  ppInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=term_side" })
  termSide: InterfaceCircuitTerminationTerminationEnum;

  @SpeakeasyMetadata({ data: "json, name=upstream_speed" })
  upstreamSpeed?: number;

  @SpeakeasyMetadata({ data: "json, name=xconnect_id" })
  xconnectId?: string;
}
