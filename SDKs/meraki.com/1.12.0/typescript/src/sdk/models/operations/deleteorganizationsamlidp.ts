import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteOrganizationSamlIdpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=idpId" })
  idpId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class DeleteOrganizationSamlIdpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteOrganizationSamlIdpPathParams;
}


export class DeleteOrganizationSamlIdpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
