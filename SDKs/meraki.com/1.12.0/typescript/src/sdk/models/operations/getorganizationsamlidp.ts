import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationSamlIdpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=idpId" })
  idpId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationSamlIdpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationSamlIdpPathParams;
}


export class GetOrganizationSamlIdpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationSamlIdp200ApplicationJsonObject?: Map<string, any>;
}
