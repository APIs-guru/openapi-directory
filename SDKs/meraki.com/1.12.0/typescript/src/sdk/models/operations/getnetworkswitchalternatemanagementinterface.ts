import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSwitchAlternateManagementInterfacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSwitchAlternateManagementInterfaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSwitchAlternateManagementInterfacePathParams;
}


export class GetNetworkSwitchAlternateManagementInterfaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSwitchAlternateManagementInterface200ApplicationJsonObject?: Map<string, any>;
}
