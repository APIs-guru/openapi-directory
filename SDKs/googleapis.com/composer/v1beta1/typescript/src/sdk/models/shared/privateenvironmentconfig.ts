import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkingConfig } from "./networkingconfig";
import { PrivateClusterConfigInput } from "./privateclusterconfig";
import { PrivateClusterConfig } from "./privateclusterconfig";



// PrivateEnvironmentConfigInput
/** 
 * The configuration information for configuring a Private IP Cloud Composer environment.
**/
export class PrivateEnvironmentConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudComposerConnectionSubnetwork" })
  cloudComposerConnectionSubnetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=cloudComposerNetworkIpv4CidrBlock" })
  cloudComposerNetworkIpv4CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=cloudSqlIpv4CidrBlock" })
  cloudSqlIpv4CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=enablePrivateEnvironment" })
  enablePrivateEnvironment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enablePrivatelyUsedPublicIps" })
  enablePrivatelyUsedPublicIps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=networkingConfig" })
  networkingConfig?: NetworkingConfig;

  @SpeakeasyMetadata({ data: "json, name=privateClusterConfig" })
  privateClusterConfig?: PrivateClusterConfigInput;

  @SpeakeasyMetadata({ data: "json, name=webServerIpv4CidrBlock" })
  webServerIpv4CidrBlock?: string;
}


// PrivateEnvironmentConfig
/** 
 * The configuration information for configuring a Private IP Cloud Composer environment.
**/
export class PrivateEnvironmentConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudComposerConnectionSubnetwork" })
  cloudComposerConnectionSubnetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=cloudComposerNetworkIpv4CidrBlock" })
  cloudComposerNetworkIpv4CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=cloudComposerNetworkIpv4ReservedRange" })
  cloudComposerNetworkIpv4ReservedRange?: string;

  @SpeakeasyMetadata({ data: "json, name=cloudSqlIpv4CidrBlock" })
  cloudSqlIpv4CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=enablePrivateEnvironment" })
  enablePrivateEnvironment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enablePrivatelyUsedPublicIps" })
  enablePrivatelyUsedPublicIps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=networkingConfig" })
  networkingConfig?: NetworkingConfig;

  @SpeakeasyMetadata({ data: "json, name=privateClusterConfig" })
  privateClusterConfig?: PrivateClusterConfig;

  @SpeakeasyMetadata({ data: "json, name=webServerIpv4CidrBlock" })
  webServerIpv4CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=webServerIpv4ReservedRange" })
  webServerIpv4ReservedRange?: string;
}
