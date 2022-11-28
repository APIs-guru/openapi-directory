import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05ConsentsFetchHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostV05ConsentsFetchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05ConsentsFetchHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ConsentFetchRequest;
}


export class PostV05ConsentsFetchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
