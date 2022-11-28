import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRealmClientScopesIdProtocolMappersAddModelsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClientScopesIdProtocolMappersAddModelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmClientScopesIdProtocolMappersAddModelsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.ProtocolMapperRepresentation })
  request: shared.ProtocolMapperRepresentation[];
}


export class PostRealmClientScopesIdProtocolMappersAddModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
