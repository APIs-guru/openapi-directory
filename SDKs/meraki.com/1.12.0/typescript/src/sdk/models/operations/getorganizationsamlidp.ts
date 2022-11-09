import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationSamlIdpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=idpId" })
  idpId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationSamlIdpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationSamlIdpPathParams;
}


export class GetOrganizationSamlIdpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationSamlIdp200ApplicationJsonObject?: Map<string, any>;
}
