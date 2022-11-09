import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpRouteDestination
/** 
 * Specifications of a destination to which the request should be routed to.
**/
export class HttpRouteDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @Metadata({ data: "json, name=weight" })
  weight?: number;
}
