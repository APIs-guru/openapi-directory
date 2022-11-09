import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmAuthenticationConfigIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmAuthenticationConfigIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmAuthenticationConfigIdPathParams;
}


export class DeleteRealmAuthenticationConfigIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
