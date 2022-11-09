import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkGroupPoliciesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkGroupPoliciesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkGroupPoliciesPathParams;
}


export class GetNetworkGroupPoliciesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkGroupPolicies200ApplicationJsonObject?: Map<string, any>;
}
