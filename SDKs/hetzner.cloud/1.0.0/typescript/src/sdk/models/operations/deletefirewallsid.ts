import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteFirewallsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteFirewallsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteFirewallsIdPathParams;
}


export class DeleteFirewallsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
