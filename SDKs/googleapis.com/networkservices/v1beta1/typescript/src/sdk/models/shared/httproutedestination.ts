import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpRouteDestination
/** 
 * Specifications of a destination to which the request should be routed to.
**/
export class HttpRouteDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}
