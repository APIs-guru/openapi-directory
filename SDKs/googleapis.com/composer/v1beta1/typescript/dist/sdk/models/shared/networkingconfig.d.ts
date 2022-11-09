import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum NetworkingConfigConnectionTypeEnum {
    ConnectionTypeUnspecified = "CONNECTION_TYPE_UNSPECIFIED",
    VpcPeering = "VPC_PEERING",
    PrivateServiceConnect = "PRIVATE_SERVICE_CONNECT"
}
/**
 * Configuration options for networking connections in the Composer 2 environment.
**/
export declare class NetworkingConfig extends SpeakeasyBase {
    connectionType?: NetworkingConfigConnectionTypeEnum;
}
