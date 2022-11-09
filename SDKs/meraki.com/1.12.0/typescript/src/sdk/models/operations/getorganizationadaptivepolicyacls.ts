import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationAdaptivePolicyAclsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationAdaptivePolicyAclsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationAdaptivePolicyAclsPathParams;
}


export class GetOrganizationAdaptivePolicyAclsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationAdaptivePolicyAcls200ApplicationJsonObject?: Map<string, any>;
}
