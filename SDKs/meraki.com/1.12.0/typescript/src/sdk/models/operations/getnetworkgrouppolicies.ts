import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkGroupPoliciesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkGroupPoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkGroupPoliciesPathParams;
}


export class GetNetworkGroupPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkGroupPolicies200ApplicationJsonObject?: Map<string, any>;
}
