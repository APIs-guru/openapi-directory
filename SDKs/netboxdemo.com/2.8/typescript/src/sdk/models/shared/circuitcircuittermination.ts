import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedInterface } from "./nestedinterface";
import { NestedSite } from "./nestedsite";


export class CircuitCircuitTermination extends SpeakeasyBase {
  @Metadata({ data: "json, name=connected_endpoint" })
  connectedEndpoint: NestedInterface;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=port_speed" })
  portSpeed: number;

  @Metadata({ data: "json, name=site" })
  site: NestedSite;

  @Metadata({ data: "json, name=upstream_speed" })
  upstreamSpeed?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=xconnect_id" })
  xconnectId?: string;
}
