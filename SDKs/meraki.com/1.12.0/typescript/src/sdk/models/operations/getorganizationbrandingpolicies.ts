import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationBrandingPoliciesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationBrandingPoliciesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationBrandingPoliciesPathParams;
}


export class GetOrganizationBrandingPoliciesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationBrandingPolicies200ApplicationJsonObject?: Map<string, any>;
}
