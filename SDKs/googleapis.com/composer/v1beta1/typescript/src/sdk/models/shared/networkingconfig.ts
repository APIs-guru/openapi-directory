import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NetworkingConfigConnectionTypeEnum {
    ConnectionTypeUnspecified = "CONNECTION_TYPE_UNSPECIFIED",
    VpcPeering = "VPC_PEERING",
    PrivateServiceConnect = "PRIVATE_SERVICE_CONNECT"
}


// NetworkingConfig
/** 
 * Configuration options for networking connections in the Composer 2 environment.
**/
export class NetworkingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionType" })
  connectionType?: NetworkingConfigConnectionTypeEnum;
}
