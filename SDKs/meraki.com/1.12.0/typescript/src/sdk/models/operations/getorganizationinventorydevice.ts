import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationInventoryDevicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetOrganizationInventoryDeviceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationInventoryDevicePathParams;
}


export class GetOrganizationInventoryDeviceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationInventoryDevice200ApplicationJsonObject?: Map<string, any>;
}
