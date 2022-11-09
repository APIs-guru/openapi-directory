import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNetworkSwitchQosRulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=qosRuleId" })
  qosRuleId: string;
}


export class DeleteNetworkSwitchQosRuleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNetworkSwitchQosRulePathParams;
}


export class DeleteNetworkSwitchQosRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
