import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkSwitchQosRulesOrderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkSwitchQosRulesOrderRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ruleIds" })
  ruleIds: string[];
}


export class UpdateNetworkSwitchQosRulesOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkSwitchQosRulesOrderPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkSwitchQosRulesOrderRequestBody;
}


export class UpdateNetworkSwitchQosRulesOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkSwitchQosRulesOrder200ApplicationJsonObject?: Map<string, any>;
}
