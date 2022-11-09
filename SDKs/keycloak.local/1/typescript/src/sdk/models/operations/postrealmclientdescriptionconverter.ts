import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmClientDescriptionConverterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClientDescriptionConverterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmClientDescriptionConverterPathParams;

  @Metadata({ data: "request, media_type=text/plain" })
  request: string;
}


export class PostRealmClientDescriptionConverterResponse extends SpeakeasyBase {
  @Metadata()
  clientRepresentation?: shared.ClientRepresentation;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
