import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkGroupPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupPolicyId" })
  groupPolicyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkGroupPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkGroupPolicyPathParams;
}


export class GetNetworkGroupPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkGroupPolicy200ApplicationJsonObject?: Map<string, any>;
}
