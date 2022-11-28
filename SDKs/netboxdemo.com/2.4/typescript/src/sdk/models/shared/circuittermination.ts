import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedCircuit } from "./nestedcircuit";
import { NestedInterface } from "./nestedinterface";
import { NestedSite } from "./nestedsite";


export enum CircuitTerminationTerminationEnum {
    A = "A",
    Z = "Z"
}


export class CircuitTermination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=circuit" })
  circuit: NestedCircuit;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=interface" })
  interface?: NestedInterface;

  @SpeakeasyMetadata({ data: "json, name=port_speed" })
  portSpeed: number;

  @SpeakeasyMetadata({ data: "json, name=pp_info" })
  ppInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site: NestedSite;

  @SpeakeasyMetadata({ data: "json, name=term_side" })
  termSide: CircuitTerminationTerminationEnum;

  @SpeakeasyMetadata({ data: "json, name=upstream_speed" })
  upstreamSpeed?: number;

  @SpeakeasyMetadata({ data: "json, name=xconnect_id" })
  xconnectId?: string;
}
