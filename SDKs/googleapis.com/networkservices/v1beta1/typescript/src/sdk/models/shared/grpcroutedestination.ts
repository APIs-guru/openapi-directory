import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GrpcRouteDestination
/** 
 * The destination to which traffic will be routed.
**/
export class GrpcRouteDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}
