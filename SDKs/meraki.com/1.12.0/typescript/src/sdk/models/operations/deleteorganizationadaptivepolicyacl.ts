import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteOrganizationAdaptivePolicyAclPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class DeleteOrganizationAdaptivePolicyAclRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteOrganizationAdaptivePolicyAclPathParams;
}


export class DeleteOrganizationAdaptivePolicyAclResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
