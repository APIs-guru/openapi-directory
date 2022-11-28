import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNetworkFirmwareUpgradesRollbackPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum {
    Wireless = "wireless",
    Switch = "switch",
    Appliance = "appliance",
    Camera = "camera",
    VmxHost = "vmxHost",
    CellularGateway = "cellularGateway"
}

export enum CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum {
    Performance = "performance",
    Stability = "stability",
    BrokeOldFeatures = "broke old features",
    UnifyingNetworksVersions = "unifying networks versions",
    Testing = "testing",
    Other = "other"
}


export class CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment: string;
}


// CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion
/** 
 * Version to downgrade to (if the network has firmware flexibility)
**/
export class CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class CreateNetworkFirmwareUpgradesRollbackRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum;

  @SpeakeasyMetadata({ data: "json, name=reasons", elemType: CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons })
  reasons: CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons[];

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: Date;

  @SpeakeasyMetadata({ data: "json, name=toVersion" })
  toVersion?: CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion;
}


export class CreateNetworkFirmwareUpgradesRollbackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNetworkFirmwareUpgradesRollbackPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNetworkFirmwareUpgradesRollbackRequestBody;
}


export class CreateNetworkFirmwareUpgradesRollbackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNetworkFirmwareUpgradesRollback200ApplicationJsonObject?: Map<string, any>;
}
