import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationBrandingPoliciesPrioritiesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationBrandingPoliciesPrioritiesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationBrandingPoliciesPrioritiesPathParams;
}


export class GetOrganizationBrandingPoliciesPrioritiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationBrandingPoliciesPriorities200ApplicationJsonObject?: Map<string, any>;
}
