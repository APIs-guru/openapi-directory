import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PrivateClusterConfig
/** 
 * Configuration options for the private GKE cluster in a Cloud Composer environment.
**/
export class PrivateClusterConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enablePrivateEndpoint" })
  enablePrivateEndpoint?: boolean;

  @Metadata({ data: "json, name=masterIpv4CidrBlock" })
  masterIpv4CidrBlock?: string;

  @Metadata({ data: "json, name=masterIpv4ReservedRange" })
  masterIpv4ReservedRange?: string;
}
