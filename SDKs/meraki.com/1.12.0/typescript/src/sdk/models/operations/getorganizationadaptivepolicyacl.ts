import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationAdaptivePolicyAclPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationAdaptivePolicyAclRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationAdaptivePolicyAclPathParams;
}


export class GetOrganizationAdaptivePolicyAclResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationAdaptivePolicyAcl200ApplicationJsonObject?: Map<string, any>;
}
