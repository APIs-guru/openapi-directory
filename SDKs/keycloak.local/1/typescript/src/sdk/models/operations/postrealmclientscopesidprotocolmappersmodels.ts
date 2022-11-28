import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRealmClientScopesIdProtocolMappersModelsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClientScopesIdProtocolMappersModelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmClientScopesIdProtocolMappersModelsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ProtocolMapperRepresentation;
}


export class PostRealmClientScopesIdProtocolMappersModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
