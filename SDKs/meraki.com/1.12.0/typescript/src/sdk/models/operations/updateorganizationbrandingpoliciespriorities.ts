import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateOrganizationBrandingPoliciesPrioritiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class UpdateOrganizationBrandingPoliciesPrioritiesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brandingPolicyIds" })
  brandingPolicyIds: string[];
}


export class UpdateOrganizationBrandingPoliciesPrioritiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateOrganizationBrandingPoliciesPrioritiesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateOrganizationBrandingPoliciesPrioritiesRequestBody;
}


export class UpdateOrganizationBrandingPoliciesPrioritiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateOrganizationBrandingPoliciesPriorities200ApplicationJsonObject?: Map<string, any>;
}
