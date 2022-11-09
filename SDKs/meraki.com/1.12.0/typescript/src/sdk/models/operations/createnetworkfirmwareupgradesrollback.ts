import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNetworkFirmwareUpgradesRollbackPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum {
    Wireless = "wireless"
,    Switch = "switch"
,    Appliance = "appliance"
,    Camera = "camera"
,    VmxHost = "vmxHost"
,    CellularGateway = "cellularGateway"
}

export enum CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum {
    Performance = "performance"
,    Stability = "stability"
,    BrokeOldFeatures = "broke old features"
,    UnifyingNetworksVersions = "unifying networks versions"
,    Testing = "testing"
,    Other = "other"
}


export class CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum;

  @Metadata({ data: "json, name=comment" })
  comment: string;
}


// CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion
/** 
 * Version to downgrade to (if the network has firmware flexibility)
**/
export class CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}


export class CreateNetworkFirmwareUpgradesRollbackRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=product" })
  product?: CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum;

  @Metadata({ data: "json, name=reasons", elemType: operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons })
  reasons: CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons[];

  @Metadata({ data: "json, name=time" })
  time?: Date;

  @Metadata({ data: "json, name=toVersion" })
  toVersion?: CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion;
}


export class CreateNetworkFirmwareUpgradesRollbackRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNetworkFirmwareUpgradesRollbackPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateNetworkFirmwareUpgradesRollbackRequestBody;
}


export class CreateNetworkFirmwareUpgradesRollbackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNetworkFirmwareUpgradesRollback200ApplicationJsonObject?: Map<string, any>;
}
