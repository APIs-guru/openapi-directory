import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationAdaptivePolicyAclsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationAdaptivePolicyAclsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationAdaptivePolicyAclsPathParams;
}


export class GetOrganizationAdaptivePolicyAclsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationAdaptivePolicyAcls200ApplicationJsonObject?: Map<string, any>;
}
