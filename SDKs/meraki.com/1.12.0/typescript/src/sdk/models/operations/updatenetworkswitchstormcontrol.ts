import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkSwitchStormControlPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkSwitchStormControlRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=broadcastThreshold" })
  broadcastThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=multicastThreshold" })
  multicastThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=unknownUnicastThreshold" })
  unknownUnicastThreshold?: number;
}


export class UpdateNetworkSwitchStormControlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkSwitchStormControlPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchStormControlRequestBody;
}


export class UpdateNetworkSwitchStormControlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkSwitchStormControl200ApplicationJsonObject?: Map<string, any>;
}
