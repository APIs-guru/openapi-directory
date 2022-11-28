import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=authConfig" })
  authConfig?: GoogleCloudConnectorsV1AuthConfig;

  @SpeakeasyMetadata({ data: "json, name=configVariables", elemType: GoogleCloudConnectorsV1ConfigVariable })
  configVariables?: GoogleCloudConnectorsV1ConfigVariable[];

  @SpeakeasyMetadata({ data: "json, name=connectorVersion" })
  connectorVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationConfigs", elemType: GoogleCloudConnectorsV1DestinationConfig })
  destinationConfigs?: GoogleCloudConnectorsV1DestinationConfig[];

  @SpeakeasyMetadata({ data: "json, name=envoyImageLocation" })
  envoyImageLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=imageLocation" })
  imageLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=lockConfig" })
  lockConfig?: GoogleCloudConnectorsV1LockConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeConfig" })
  nodeConfig?: GoogleCloudConnectorsV1NodeConfig;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceDirectory" })
  serviceDirectory?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GoogleCloudConnectorsV1ConnectionStatus;

  @SpeakeasyMetadata({ data: "json, name=suspended" })
  suspended?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
