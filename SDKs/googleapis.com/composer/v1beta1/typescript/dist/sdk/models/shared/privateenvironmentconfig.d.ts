import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkingConfig } from "./networkingconfig";
import { PrivateClusterConfigInput } from "./privateclusterconfig";
import { PrivateClusterConfig } from "./privateclusterconfig";
/**
 * The configuration information for configuring a Private IP Cloud Composer environment.
**/
export declare class PrivateEnvironmentConfigInput extends SpeakeasyBase {
    cloudComposerConnectionSubnetwork?: string;
    cloudComposerNetworkIpv4CidrBlock?: string;
    cloudSqlIpv4CidrBlock?: string;
    enablePrivateEnvironment?: boolean;
    enablePrivatelyUsedPublicIps?: boolean;
    networkingConfig?: NetworkingConfig;
    privateClusterConfig?: PrivateClusterConfigInput;
    webServerIpv4CidrBlock?: string;
}
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
    networkingConfig?: NetworkingConfig;
    privateClusterConfig?: PrivateClusterConfig;
    webServerIpv4CidrBlock?: string;
    webServerIpv4ReservedRange?: string;
}
