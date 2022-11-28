import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationInventoryDevicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetOrganizationInventoryDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationInventoryDevicePathParams;
}


export class GetOrganizationInventoryDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationInventoryDevice200ApplicationJsonObject?: Map<string, any>;
}
