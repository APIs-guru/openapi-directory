import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmAuthenticationFlowsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmAuthenticationFlowsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmAuthenticationFlowsIdPathParams;
}


export class DeleteRealmAuthenticationFlowsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
