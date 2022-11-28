import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TlsRouteRouteDestination
/** 
 * Describe the destination for traffic to be routed to.
**/
export class TlsRouteRouteDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}
