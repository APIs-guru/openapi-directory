import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateOrganizationBrandingPoliciesPrioritiesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class UpdateOrganizationBrandingPoliciesPrioritiesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=brandingPolicyIds" })
  brandingPolicyIds: string[];
}


export class UpdateOrganizationBrandingPoliciesPrioritiesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateOrganizationBrandingPoliciesPrioritiesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateOrganizationBrandingPoliciesPrioritiesRequestBody;
}


export class UpdateOrganizationBrandingPoliciesPrioritiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateOrganizationBrandingPoliciesPriorities200ApplicationJsonObject?: Map<string, any>;
}
