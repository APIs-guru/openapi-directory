import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkSwitchAccessPoliciesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSwitchAccessPoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkSwitchAccessPoliciesPathParams;
}


export class GetNetworkSwitchAccessPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkSwitchAccessPolicies200ApplicationJsonObject?: Map<string, any>;
}
