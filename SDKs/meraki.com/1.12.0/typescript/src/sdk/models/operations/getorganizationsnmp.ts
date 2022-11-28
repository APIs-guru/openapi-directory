import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationSnmpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationSnmpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationSnmpPathParams;
}


export class GetOrganizationSnmpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationSnmp200ApplicationJsonObject?: Map<string, any>;
}
