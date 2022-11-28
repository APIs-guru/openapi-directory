import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationBrandingPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=brandingPolicyId" })
  brandingPolicyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationBrandingPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationBrandingPolicyPathParams;
}


export class GetOrganizationBrandingPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationBrandingPolicy200ApplicationJsonObject?: Map<string, any>;
}
