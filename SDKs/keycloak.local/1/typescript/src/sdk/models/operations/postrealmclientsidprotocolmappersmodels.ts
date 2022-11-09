import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmClientsIdProtocolMappersModelsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClientsIdProtocolMappersModelsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmClientsIdProtocolMappersModelsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ProtocolMapperRepresentation;
}


export class PostRealmClientsIdProtocolMappersModelsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
