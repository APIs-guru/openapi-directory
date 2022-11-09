import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkGroupPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupPolicyId" })
  groupPolicyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkGroupPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkGroupPolicyPathParams;
}


export class GetNetworkGroupPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkGroupPolicy200ApplicationJsonObject?: Map<string, any>;
}
