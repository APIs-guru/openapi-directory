import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmTestLdapConnectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmTestLdapConnectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmTestLdapConnectionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TestLdapConnectionRepresentation;
}


export class PostRealmTestLdapConnectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
