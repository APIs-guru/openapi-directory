import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkNetflowPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkNetflowRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=collectorIp" })
  collectorIp?: string;

  @Metadata({ data: "json, name=collectorPort" })
  collectorPort?: number;

  @Metadata({ data: "json, name=etaDstPort" })
  etaDstPort?: number;

  @Metadata({ data: "json, name=etaEnabled" })
  etaEnabled?: boolean;

  @Metadata({ data: "json, name=reportingEnabled" })
  reportingEnabled?: boolean;
}


export class UpdateNetworkNetflowRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkNetflowPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkNetflowRequestBody;
}


export class UpdateNetworkNetflowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkNetflow200ApplicationJsonObject?: Map<string, any>;
}
