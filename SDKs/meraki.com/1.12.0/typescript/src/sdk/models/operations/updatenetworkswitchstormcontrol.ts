import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkSwitchStormControlPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkSwitchStormControlRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=broadcastThreshold" })
  broadcastThreshold?: number;

  @Metadata({ data: "json, name=multicastThreshold" })
  multicastThreshold?: number;

  @Metadata({ data: "json, name=unknownUnicastThreshold" })
  unknownUnicastThreshold?: number;
}


export class UpdateNetworkSwitchStormControlRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkSwitchStormControlPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchStormControlRequestBody;
}


export class UpdateNetworkSwitchStormControlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkSwitchStormControl200ApplicationJsonObject?: Map<string, any>;
}
