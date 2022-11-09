import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationSnmpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationSnmpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationSnmpPathParams;
}


export class GetOrganizationSnmpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationSnmp200ApplicationJsonObject?: Map<string, any>;
}
