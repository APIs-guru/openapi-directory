import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateOrganizationSamlIdpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=idpId" })
  idpId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class UpdateOrganizationSamlIdpRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sloLogoutUrl" })
  sloLogoutUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=x509certSha1Fingerprint" })
  x509certSha1Fingerprint?: string;
}


export class UpdateOrganizationSamlIdpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateOrganizationSamlIdpPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationSamlIdpRequestBody;
}


export class UpdateOrganizationSamlIdpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateOrganizationSamlIdp200ApplicationJsonObject?: Map<string, any>;
}
