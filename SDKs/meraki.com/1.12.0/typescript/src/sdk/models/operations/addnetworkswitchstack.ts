import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddNetworkSwitchStackPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=switchStackId" })
  switchStackId: string;
}


export class AddNetworkSwitchStackRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serial" })
  serial: string;
}


export class AddNetworkSwitchStackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddNetworkSwitchStackPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddNetworkSwitchStackRequestBody;
}


export class AddNetworkSwitchStackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addNetworkSwitchStack200ApplicationJsonObject?: Map<string, any>;
}
