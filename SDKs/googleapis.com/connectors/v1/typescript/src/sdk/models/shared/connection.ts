import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthConfig } from "./authconfig";
import { ConfigVariable } from "./configvariable";
import { DestinationConfig } from "./destinationconfig";
import { LockConfig } from "./lockconfig";
import { NodeConfig } from "./nodeconfig";
import { ConnectionStatus } from "./connectionstatus";



// Connection
/** 
 * Connection represents an instance of connector.
**/
export class Connection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authConfig" })
  authConfig?: AuthConfig;

  @SpeakeasyMetadata({ data: "json, name=configVariables", elemType: ConfigVariable })
  configVariables?: ConfigVariable[];

  @SpeakeasyMetadata({ data: "json, name=connectorVersion" })
  connectorVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationConfigs", elemType: DestinationConfig })
  destinationConfigs?: DestinationConfig[];

  @SpeakeasyMetadata({ data: "json, name=envoyImageLocation" })
  envoyImageLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=imageLocation" })
  imageLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=lockConfig" })
  lockConfig?: LockConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeConfig" })
  nodeConfig?: NodeConfig;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceDirectory" })
  serviceDirectory?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ConnectionStatus;

  @SpeakeasyMetadata({ data: "json, name=suspended" })
  suspended?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// ConnectionInput
/** 
 * Connection represents an instance of connector.
**/
export class ConnectionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authConfig" })
  authConfig?: AuthConfig;

  @SpeakeasyMetadata({ data: "json, name=configVariables", elemType: ConfigVariable })
  configVariables?: ConfigVariable[];

  @SpeakeasyMetadata({ data: "json, name=connectorVersion" })
  connectorVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationConfigs", elemType: DestinationConfig })
  destinationConfigs?: DestinationConfig[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=lockConfig" })
  lockConfig?: LockConfig;

  @SpeakeasyMetadata({ data: "json, name=nodeConfig" })
  nodeConfig?: NodeConfig;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ConnectionStatus;

  @SpeakeasyMetadata({ data: "json, name=suspended" })
  suspended?: boolean;
}
