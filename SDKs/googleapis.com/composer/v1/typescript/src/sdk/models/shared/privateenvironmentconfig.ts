import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PrivateClusterConfig } from "./privateclusterconfig";


// PrivateEnvironmentConfig
/** 
 * The configuration information for configuring a Private IP Cloud Composer environment.
**/
export class PrivateEnvironmentConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudComposerConnectionSubnetwork" })
  cloudComposerConnectionSubnetwork?: string;

  @Metadata({ data: "json, name=cloudComposerNetworkIpv4CidrBlock" })
  cloudComposerNetworkIpv4CidrBlock?: string;

  @Metadata({ data: "json, name=cloudComposerNetworkIpv4ReservedRange" })
  cloudComposerNetworkIpv4ReservedRange?: string;

  @Metadata({ data: "json, name=cloudSqlIpv4CidrBlock" })
  cloudSqlIpv4CidrBlock?: string;

  @Metadata({ data: "json, name=enablePrivateEnvironment" })
  enablePrivateEnvironment?: boolean;

  @Metadata({ data: "json, name=enablePrivatelyUsedPublicIps" })
  enablePrivatelyUsedPublicIps?: boolean;

  @Metadata({ data: "json, name=privateClusterConfig" })
  privateClusterConfig?: PrivateClusterConfig;

  @Metadata({ data: "json, name=webServerIpv4CidrBlock" })
  webServerIpv4CidrBlock?: string;

  @Metadata({ data: "json, name=webServerIpv4ReservedRange" })
  webServerIpv4ReservedRange?: string;
}
