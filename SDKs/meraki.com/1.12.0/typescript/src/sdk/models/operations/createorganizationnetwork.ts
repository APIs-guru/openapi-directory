import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateOrganizationNetworkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum CreateOrganizationNetworkRequestBodyProductTypesEnum {
    Wireless = "wireless",
    Appliance = "appliance",
    Switch = "switch",
    SystemsManager = "systemsManager",
    Camera = "camera",
    CellularGateway = "cellularGateway",
    Sensor = "sensor",
    Environmental = "environmental"
}


export class CreateOrganizationNetworkRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyFromNetworkId" })
  copyFromNetworkId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=productTypes" })
  productTypes: CreateOrganizationNetworkRequestBodyProductTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;
}


export class CreateOrganizationNetworkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateOrganizationNetworkPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateOrganizationNetworkRequestBody;
}


export class CreateOrganizationNetworkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createOrganizationNetwork201ApplicationJsonObject?: Map<string, any>;
}
