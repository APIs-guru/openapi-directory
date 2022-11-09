import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNetworkSwitchAccessPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accessPolicyNumber" })
  accessPolicyNumber: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class DeleteNetworkSwitchAccessPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNetworkSwitchAccessPolicyPathParams;
}


export class DeleteNetworkSwitchAccessPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
