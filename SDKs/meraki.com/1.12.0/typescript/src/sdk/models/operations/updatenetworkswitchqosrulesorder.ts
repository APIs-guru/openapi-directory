import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkSwitchQosRulesOrderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkSwitchQosRulesOrderRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ruleIds" })
  ruleIds: string[];
}


export class UpdateNetworkSwitchQosRulesOrderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkSwitchQosRulesOrderPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkSwitchQosRulesOrderRequestBody;
}


export class UpdateNetworkSwitchQosRulesOrderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkSwitchQosRulesOrder200ApplicationJsonObject?: Map<string, any>;
}
