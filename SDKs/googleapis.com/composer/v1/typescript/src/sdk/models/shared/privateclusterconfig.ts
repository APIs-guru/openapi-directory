import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PrivateClusterConfig
/** 
 * Configuration options for the private GKE cluster in a Cloud Composer environment.
**/
export class PrivateClusterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enablePrivateEndpoint" })
  enablePrivateEndpoint?: boolean;

  @SpeakeasyMetadata({ data: "json, name=masterIpv4CidrBlock" })
  masterIpv4CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=masterIpv4ReservedRange" })
  masterIpv4ReservedRange?: string;
}


// PrivateClusterConfigInput
/** 
 * Configuration options for the private GKE cluster in a Cloud Composer environment.
**/
export class PrivateClusterConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enablePrivateEndpoint" })
  enablePrivateEndpoint?: boolean;

  @SpeakeasyMetadata({ data: "json, name=masterIpv4CidrBlock" })
  masterIpv4CidrBlock?: string;
}
