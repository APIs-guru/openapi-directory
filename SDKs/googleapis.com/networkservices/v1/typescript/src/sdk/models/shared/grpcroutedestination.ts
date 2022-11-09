import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GrpcRouteDestination
/** 
 * The destination to which traffic will be routed.
**/
export class GrpcRouteDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @Metadata({ data: "json, name=weight" })
  weight?: number;
}
