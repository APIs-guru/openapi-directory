import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PrivateClusterConfig } from "./privateclusterconfig";
/**
 * The configuration information for configuring a Private IP Cloud Composer environment.
**/
export declare class PrivateEnvironmentConfig extends SpeakeasyBase {
    cloudComposerConnectionSubnetwork?: string;
    cloudComposerNetworkIpv4CidrBlock?: string;
    cloudComposerNetworkIpv4ReservedRange?: string;
    cloudSqlIpv4CidrBlock?: string;
    enablePrivateEnvironment?: boolean;
    enablePrivatelyUsedPublicIps?: boolean;
    privateClusterConfig?: PrivateClusterConfig;
    webServerIpv4CidrBlock?: string;
    webServerIpv4ReservedRange?: string;
}
