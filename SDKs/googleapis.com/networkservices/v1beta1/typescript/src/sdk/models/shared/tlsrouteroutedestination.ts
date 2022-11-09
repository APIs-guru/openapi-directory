import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TlsRouteRouteDestination
/** 
 * Describe the destination for traffic to be routed to.
**/
export class TlsRouteRouteDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @Metadata({ data: "json, name=weight" })
  weight?: number;
}
