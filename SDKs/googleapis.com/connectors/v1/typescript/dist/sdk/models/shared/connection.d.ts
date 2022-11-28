import { SpeakeasyBase } from "../../../internal/utils";
import { AuthConfig } from "./authconfig";
import { ConfigVariable } from "./configvariable";
import { DestinationConfig } from "./destinationconfig";
import { LockConfig } from "./lockconfig";
import { NodeConfig } from "./nodeconfig";
import { ConnectionStatus } from "./connectionstatus";
/**
 * Connection represents an instance of connector.
**/
export declare class Connection extends SpeakeasyBase {
    authConfig?: AuthConfig;
    configVariables?: ConfigVariable[];
    connectorVersion?: string;
    createTime?: string;
    description?: string;
    destinationConfigs?: DestinationConfig[];
    envoyImageLocation?: string;
    imageLocation?: string;
    labels?: Map<string, string>;
    lockConfig?: LockConfig;
    name?: string;
    nodeConfig?: NodeConfig;
    serviceAccount?: string;
    serviceDirectory?: string;
    status?: ConnectionStatus;
    suspended?: boolean;
    updateTime?: string;
}
/**
 * Connection represents an instance of connector.
**/
export declare class ConnectionInput extends SpeakeasyBase {
    authConfig?: AuthConfig;
    configVariables?: ConfigVariable[];
    connectorVersion?: string;
    description?: string;
    destinationConfigs?: DestinationConfig[];
    labels?: Map<string, string>;
    lockConfig?: LockConfig;
    nodeConfig?: NodeConfig;
    serviceAccount?: string;
    status?: ConnectionStatus;
    suspended?: boolean;
}
