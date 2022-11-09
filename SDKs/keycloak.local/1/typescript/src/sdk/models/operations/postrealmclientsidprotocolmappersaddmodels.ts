import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmClientsIdProtocolMappersAddModelsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClientsIdProtocolMappersAddModelsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmClientsIdProtocolMappersAddModelsPathParams;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.ProtocolMapperRepresentation })
  request: shared.ProtocolMapperRepresentation[];
}


export class PostRealmClientsIdProtocolMappersAddModelsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
