import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedInterface } from "./nestedinterface";
import { NestedSite } from "./nestedsite";



export class CircuitCircuitTermination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connected_endpoint" })
  connectedEndpoint: NestedInterface;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=port_speed" })
  portSpeed: number;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site: NestedSite;

  @SpeakeasyMetadata({ data: "json, name=upstream_speed" })
  upstreamSpeed?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=xconnect_id" })
  xconnectId?: string;
}
