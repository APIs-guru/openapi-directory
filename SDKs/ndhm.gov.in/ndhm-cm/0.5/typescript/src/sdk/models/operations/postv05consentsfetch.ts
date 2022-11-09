import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05ConsentsFetchHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostV05ConsentsFetchRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05ConsentsFetchHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ConsentFetchRequest;
}


export class PostV05ConsentsFetchResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
