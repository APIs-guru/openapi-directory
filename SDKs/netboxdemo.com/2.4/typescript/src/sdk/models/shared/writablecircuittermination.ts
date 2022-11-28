import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WritableCircuitTerminationTerminationEnum {
    A = "A",
    Z = "Z"
}


export class WritableCircuitTerminationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=circuit" })
  circuit: number;

  @SpeakeasyMetadata({ data: "json, name=interface" })
  interface?: number;

  @SpeakeasyMetadata({ data: "json, name=port_speed" })
  portSpeed: number;

  @SpeakeasyMetadata({ data: "json, name=pp_info" })
  ppInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site: number;

  @SpeakeasyMetadata({ data: "json, name=term_side" })
  termSide: WritableCircuitTerminationTerminationEnum;

  @SpeakeasyMetadata({ data: "json, name=upstream_speed" })
  upstreamSpeed?: number;

  @SpeakeasyMetadata({ data: "json, name=xconnect_id" })
  xconnectId?: string;
}
