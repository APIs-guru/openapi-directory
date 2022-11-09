import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=authConfig" })
  authConfig?: AuthConfig;

  @Metadata({ data: "json, name=configVariables", elemType: shared.ConfigVariable })
  configVariables?: ConfigVariable[];

  @Metadata({ data: "json, name=connectorVersion" })
  connectorVersion?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=destinationConfigs", elemType: shared.DestinationConfig })
  destinationConfigs?: DestinationConfig[];

  @Metadata({ data: "json, name=envoyImageLocation" })
  envoyImageLocation?: string;

  @Metadata({ data: "json, name=imageLocation" })
  imageLocation?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=lockConfig" })
  lockConfig?: LockConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nodeConfig" })
  nodeConfig?: NodeConfig;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=serviceDirectory" })
  serviceDirectory?: string;

  @Metadata({ data: "json, name=status" })
  status?: ConnectionStatus;

  @Metadata({ data: "json, name=suspended" })
  suspended?: boolean;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
