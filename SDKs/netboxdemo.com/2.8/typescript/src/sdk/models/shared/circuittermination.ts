import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedCable } from "./nestedcable";
import { NestedCircuit } from "./nestedcircuit";
import { NestedSite } from "./nestedsite";

export enum CircuitTerminationConnectionStatusLabelEnum {
    NotConnected = "Not Connected"
,    Connected = "Connected"
}


export class CircuitTerminationConnectionStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: CircuitTerminationConnectionStatusLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: boolean;
}

export enum CircuitTerminationTerminationEnum {
    A = "A"
,    Z = "Z"
}


export class CircuitTermination extends SpeakeasyBase {
  @Metadata({ data: "json, name=cable" })
  cable?: NestedCable;

  @Metadata({ data: "json, name=circuit" })
  circuit: NestedCircuit;

  @Metadata({ data: "json, name=connected_endpoint" })
  connectedEndpoint?: Map<string, string>;

  @Metadata({ data: "json, name=connected_endpoint_type" })
  connectedEndpointType?: string;

  @Metadata({ data: "json, name=connection_status" })
  connectionStatus?: CircuitTerminationConnectionStatus;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

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
