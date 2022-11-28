import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpLoadBalancing
/** 
 * Configuration options for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster.
**/
export class HttpLoadBalancing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;
}
