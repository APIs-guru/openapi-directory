import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateOrganizationSamlIdpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class CreateOrganizationSamlIdpRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=sloLogoutUrl" })
  sloLogoutUrl?: string;

  @Metadata({ data: "json, name=x509certSha1Fingerprint" })
  x509certSha1Fingerprint: string;
}


export class CreateOrganizationSamlIdpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateOrganizationSamlIdpPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateOrganizationSamlIdpRequestBody;
}


export class CreateOrganizationSamlIdpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createOrganizationSamlIdp201ApplicationJsonObject?: Map<string, any>;
}
