import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteOrganizationAdaptivePolicyAclPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class DeleteOrganizationAdaptivePolicyAclRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteOrganizationAdaptivePolicyAclPathParams;
}


export class DeleteOrganizationAdaptivePolicyAclResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
