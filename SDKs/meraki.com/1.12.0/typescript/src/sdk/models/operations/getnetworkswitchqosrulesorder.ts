import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSwitchQosRulesOrderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSwitchQosRulesOrderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSwitchQosRulesOrderPathParams;
}


export class GetNetworkSwitchQosRulesOrderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSwitchQosRulesOrder200ApplicationJsonObject?: Map<string, any>;
}
