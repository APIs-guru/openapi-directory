import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveNetworkSwitchStackPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=switchStackId" })
  switchStackId: string;
}


export class RemoveNetworkSwitchStackRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=serial" })
  serial: string;
}


export class RemoveNetworkSwitchStackRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveNetworkSwitchStackPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RemoveNetworkSwitchStackRequestBody;
}


export class RemoveNetworkSwitchStackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  removeNetworkSwitchStack200ApplicationJsonObject?: Map<string, any>;
}
