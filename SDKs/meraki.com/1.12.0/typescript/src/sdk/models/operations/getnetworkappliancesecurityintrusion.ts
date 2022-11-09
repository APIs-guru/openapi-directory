import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceSecurityIntrusionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceSecurityIntrusionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceSecurityIntrusionPathParams;
}


export class GetNetworkApplianceSecurityIntrusionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceSecurityIntrusion200ApplicationJsonObject?: Map<string, any>;
}
