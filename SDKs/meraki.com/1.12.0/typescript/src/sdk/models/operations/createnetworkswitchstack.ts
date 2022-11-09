import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNetworkSwitchStackPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class CreateNetworkSwitchStackRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=serials" })
  serials: string[];
}


export class CreateNetworkSwitchStackRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNetworkSwitchStackPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateNetworkSwitchStackRequestBody;
}


export class CreateNetworkSwitchStackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNetworkSwitchStack201ApplicationJsonObject?: Map<string, any>;
}
