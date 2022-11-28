import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkNetflowPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkNetflowRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collectorIp" })
  collectorIp?: string;

  @SpeakeasyMetadata({ data: "json, name=collectorPort" })
  collectorPort?: number;

  @SpeakeasyMetadata({ data: "json, name=etaDstPort" })
  etaDstPort?: number;

  @SpeakeasyMetadata({ data: "json, name=etaEnabled" })
  etaEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reportingEnabled" })
  reportingEnabled?: boolean;
}


export class UpdateNetworkNetflowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkNetflowPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkNetflowRequestBody;
}


export class UpdateNetworkNetflowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkNetflow200ApplicationJsonObject?: Map<string, any>;
}
