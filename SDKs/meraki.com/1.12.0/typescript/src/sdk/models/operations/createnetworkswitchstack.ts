import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNetworkSwitchStackPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class CreateNetworkSwitchStackRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=serials" })
  serials: string[];
}


export class CreateNetworkSwitchStackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNetworkSwitchStackPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNetworkSwitchStackRequestBody;
}


export class CreateNetworkSwitchStackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNetworkSwitchStack201ApplicationJsonObject?: Map<string, any>;
}
