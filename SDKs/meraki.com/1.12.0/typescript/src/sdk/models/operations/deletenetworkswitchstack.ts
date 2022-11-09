import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNetworkSwitchStackPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=switchStackId" })
  switchStackId: string;
}


export class DeleteNetworkSwitchStackRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNetworkSwitchStackPathParams;
}


export class DeleteNetworkSwitchStackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
