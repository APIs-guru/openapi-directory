import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddNetworkSwitchStackPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=switchStackId" })
  switchStackId: string;
}


export class AddNetworkSwitchStackRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=serial" })
  serial: string;
}


export class AddNetworkSwitchStackRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddNetworkSwitchStackPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddNetworkSwitchStackRequestBody;
}


export class AddNetworkSwitchStackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  addNetworkSwitchStack200ApplicationJsonObject?: Map<string, any>;
}
