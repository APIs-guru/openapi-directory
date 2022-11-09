import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostRealmClientsIdNodesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClientsIdNodesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmClientsIdNodesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class PostRealmClientsIdNodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
