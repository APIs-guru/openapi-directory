import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSwitchQosRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSwitchQosRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSwitchQosRulesPathParams;
}


export class GetNetworkSwitchQosRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSwitchQosRules200ApplicationJsonObject?: Map<string, any>;
}
