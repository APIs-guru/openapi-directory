import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteFirewallsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteFirewallsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteFirewallsIdPathParams;
}


export class DeleteFirewallsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
