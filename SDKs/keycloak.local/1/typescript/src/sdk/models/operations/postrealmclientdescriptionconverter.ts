import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRealmClientDescriptionConverterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClientDescriptionConverterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmClientDescriptionConverterPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  request: string;
}


export class PostRealmClientDescriptionConverterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientRepresentation?: shared.ClientRepresentation;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
