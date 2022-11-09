import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSwitchQosRulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=qosRuleId" })
  qosRuleId: string;
}


export class GetNetworkSwitchQosRuleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSwitchQosRulePathParams;
}


export class GetNetworkSwitchQosRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSwitchQosRule200ApplicationJsonObject?: Map<string, any>;
}
