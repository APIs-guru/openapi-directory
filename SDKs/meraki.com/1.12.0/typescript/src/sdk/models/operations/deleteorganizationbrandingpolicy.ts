import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteOrganizationBrandingPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=brandingPolicyId" })
  brandingPolicyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class DeleteOrganizationBrandingPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteOrganizationBrandingPolicyPathParams;
}


export class DeleteOrganizationBrandingPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
