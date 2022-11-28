import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudConnectorsV1AuthConfig } from "./googlecloudconnectorsv1authconfig";
import { GoogleCloudConnectorsV1ConfigVariable } from "./googlecloudconnectorsv1configvariable";
import { GoogleCloudConnectorsV1DestinationConfig } from "./googlecloudconnectorsv1destinationconfig";
import { GoogleCloudConnectorsV1LockConfig } from "./googlecloudconnectorsv1lockconfig";
import { GoogleCloudConnectorsV1NodeConfig } from "./googlecloudconnectorsv1nodeconfig";
import { GoogleCloudConnectorsV1ConnectionStatus } from "./googlecloudconnectorsv1connectionstatus";
/**
 * Connection represents an instance of connector.
**/
export declare class GoogleCloudConnectorsV1Connection extends SpeakeasyBase {
    authConfig?: GoogleCloudConnectorsV1AuthConfig;
    configVariables?: GoogleCloudConnectorsV1ConfigVariable[];
    connectorVersion?: string;
    createTime?: string;
    description?: string;
    destinationConfigs?: GoogleCloudConnectorsV1DestinationConfig[];
    envoyImageLocation?: string;
    imageLocation?: string;
    labels?: Map<string, string>;
    lockConfig?: GoogleCloudConnectorsV1LockConfig;
    name?: string;
    nodeConfig?: GoogleCloudConnectorsV1NodeConfig;
    serviceAccount?: string;
    serviceDirectory?: string;
    status?: GoogleCloudConnectorsV1ConnectionStatus;
    suspended?: boolean;
    updateTime?: string;
}
