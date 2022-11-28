import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteOrganizationSamlIdpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=idpId" })
  idpId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class DeleteOrganizationSamlIdpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteOrganizationSamlIdpPathParams;
}


export class DeleteOrganizationSamlIdpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
