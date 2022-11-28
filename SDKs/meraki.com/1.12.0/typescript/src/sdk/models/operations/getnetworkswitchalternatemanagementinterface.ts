import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkSwitchAlternateManagementInterfacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSwitchAlternateManagementInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkSwitchAlternateManagementInterfacePathParams;
}


export class GetNetworkSwitchAlternateManagementInterfaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkSwitchAlternateManagementInterface200ApplicationJsonObject?: Map<string, any>;
}
