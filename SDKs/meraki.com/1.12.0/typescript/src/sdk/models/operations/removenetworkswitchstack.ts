import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveNetworkSwitchStackPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=switchStackId" })
  switchStackId: string;
}


export class RemoveNetworkSwitchStackRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serial" })
  serial: string;
}


export class RemoveNetworkSwitchStackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveNetworkSwitchStackPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemoveNetworkSwitchStackRequestBody;
}


export class RemoveNetworkSwitchStackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  removeNetworkSwitchStack200ApplicationJsonObject?: Map<string, any>;
}
