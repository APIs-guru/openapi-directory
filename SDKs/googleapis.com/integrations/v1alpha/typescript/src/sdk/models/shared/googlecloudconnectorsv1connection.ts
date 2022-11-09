import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudConnectorsV1AuthConfig } from "./googlecloudconnectorsv1authconfig";
import { GoogleCloudConnectorsV1ConfigVariable } from "./googlecloudconnectorsv1configvariable";
import { GoogleCloudConnectorsV1DestinationConfig } from "./googlecloudconnectorsv1destinationconfig";
import { GoogleCloudConnectorsV1LockConfig } from "./googlecloudconnectorsv1lockconfig";
import { GoogleCloudConnectorsV1NodeConfig } from "./googlecloudconnectorsv1nodeconfig";
import { GoogleCloudConnectorsV1ConnectionStatus } from "./googlecloudconnectorsv1connectionstatus";


// GoogleCloudConnectorsV1Connection
/** 
 * Connection represents an instance of connector.
**/
export class GoogleCloudConnectorsV1Connection extends SpeakeasyBase {
  @Metadata({ data: "json, name=authConfig" })
  authConfig?: GoogleCloudConnectorsV1AuthConfig;

  @Metadata({ data: "json, name=configVariables", elemType: shared.GoogleCloudConnectorsV1ConfigVariable })
  configVariables?: GoogleCloudConnectorsV1ConfigVariable[];

  @Metadata({ data: "json, name=connectorVersion" })
  connectorVersion?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=destinationConfigs", elemType: shared.GoogleCloudConnectorsV1DestinationConfig })
  destinationConfigs?: GoogleCloudConnectorsV1DestinationConfig[];

  @Metadata({ data: "json, name=envoyImageLocation" })
  envoyImageLocation?: string;

  @Metadata({ data: "json, name=imageLocation" })
  imageLocation?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=lockConfig" })
  lockConfig?: GoogleCloudConnectorsV1LockConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nodeConfig" })
  nodeConfig?: GoogleCloudConnectorsV1NodeConfig;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=serviceDirectory" })
  serviceDirectory?: string;

  @Metadata({ data: "json, name=status" })
  status?: GoogleCloudConnectorsV1ConnectionStatus;

  @Metadata({ data: "json, name=suspended" })
  suspended?: boolean;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
