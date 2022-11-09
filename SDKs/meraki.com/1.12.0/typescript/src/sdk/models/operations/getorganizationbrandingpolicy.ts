import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationBrandingPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=brandingPolicyId" })
  brandingPolicyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationBrandingPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationBrandingPolicyPathParams;
}


export class GetOrganizationBrandingPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationBrandingPolicy200ApplicationJsonObject?: Map<string, any>;
}
