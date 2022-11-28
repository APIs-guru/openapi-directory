import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateOrganizationSamlIdpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class CreateOrganizationSamlIdpRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sloLogoutUrl" })
  sloLogoutUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=x509certSha1Fingerprint" })
  x509certSha1Fingerprint: string;
}


export class CreateOrganizationSamlIdpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateOrganizationSamlIdpPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateOrganizationSamlIdpRequestBody;
}


export class CreateOrganizationSamlIdpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createOrganizationSamlIdp201ApplicationJsonObject?: Map<string, any>;
}
