import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateOrganizationNetworkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum CreateOrganizationNetworkRequestBodyProductTypesEnum {
    Wireless = "wireless"
,    Appliance = "appliance"
,    Switch = "switch"
,    SystemsManager = "systemsManager"
,    Camera = "camera"
,    CellularGateway = "cellularGateway"
,    Sensor = "sensor"
,    Environmental = "environmental"
}


export class CreateOrganizationNetworkRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyFromNetworkId" })
  copyFromNetworkId?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=productTypes" })
  productTypes: CreateOrganizationNetworkRequestBodyProductTypesEnum[];

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;
}


export class CreateOrganizationNetworkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateOrganizationNetworkPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateOrganizationNetworkRequestBody;
}


export class CreateOrganizationNetworkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createOrganizationNetwork201ApplicationJsonObject?: Map<string, any>;
}
