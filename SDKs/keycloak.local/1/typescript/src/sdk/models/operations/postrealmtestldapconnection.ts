import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRealmTestLdapConnectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmTestLdapConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmTestLdapConnectionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.TestLdapConnectionRepresentation;
}


export class PostRealmTestLdapConnectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
