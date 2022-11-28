import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TcpRouteRouteDestination
/** 
 * Describe the destination for traffic to be routed to.
**/
export class TcpRouteRouteDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}
