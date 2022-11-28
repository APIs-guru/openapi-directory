import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationAdaptivePolicyAclPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationAdaptivePolicyAclRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationAdaptivePolicyAclPathParams;
}


export class GetOrganizationAdaptivePolicyAclResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationAdaptivePolicyAcl200ApplicationJsonObject?: Map<string, any>;
}
