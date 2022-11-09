import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNetworkGroupPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupPolicyId" })
  groupPolicyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class DeleteNetworkGroupPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNetworkGroupPolicyPathParams;
}


export class DeleteNetworkGroupPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
