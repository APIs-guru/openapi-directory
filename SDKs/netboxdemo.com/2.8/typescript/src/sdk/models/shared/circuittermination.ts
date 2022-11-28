import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedCable } from "./nestedcable";
import { NestedCircuit } from "./nestedcircuit";
import { NestedSite } from "./nestedsite";


export enum CircuitTerminationConnectionStatusLabelEnum {
    NotConnected = "Not Connected",
    Connected = "Connected"
}


export class CircuitTerminationConnectionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: CircuitTerminationConnectionStatusLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: boolean;
}

export enum CircuitTerminationTerminationEnum {
    A = "A",
    Z = "Z"
}


export class CircuitTermination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cable" })
  cable?: NestedCable;

  @SpeakeasyMetadata({ data: "json, name=circuit" })
  circuit: NestedCircuit;

  @SpeakeasyMetadata({ data: "json, name=connected_endpoint" })
  connectedEndpoint?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=connected_endpoint_type" })
  connectedEndpointType?: string;

  @SpeakeasyMetadata({ data: "json, name=connection_status" })
  connectionStatus?: CircuitTerminationConnectionStatus;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

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
