import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkSwitchAccessPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accessPolicyNumber" })
  accessPolicyNumber: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSwitchAccessPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkSwitchAccessPolicyPathParams;
}


export class GetNetworkSwitchAccessPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkSwitchAccessPolicy200ApplicationJsonObject?: Map<string, any>;
}
