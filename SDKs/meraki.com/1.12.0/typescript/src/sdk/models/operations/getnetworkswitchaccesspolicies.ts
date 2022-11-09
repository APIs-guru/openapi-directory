import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSwitchAccessPoliciesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSwitchAccessPoliciesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSwitchAccessPoliciesPathParams;
}


export class GetNetworkSwitchAccessPoliciesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSwitchAccessPolicies200ApplicationJsonObject?: Map<string, any>;
}
