import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateOrganizationSamlIdpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=idpId" })
  idpId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class UpdateOrganizationSamlIdpRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=sloLogoutUrl" })
  sloLogoutUrl?: string;

  @Metadata({ data: "json, name=x509certSha1Fingerprint" })
  x509certSha1Fingerprint?: string;
}


export class UpdateOrganizationSamlIdpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateOrganizationSamlIdpPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationSamlIdpRequestBody;
}


export class UpdateOrganizationSamlIdpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateOrganizationSamlIdp200ApplicationJsonObject?: Map<string, any>;
}
