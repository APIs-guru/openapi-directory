import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05SessionsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  sessionRequest?: shared.SessionRequest;
}


export class PostV05SessionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: PostV05SessionsRequests;
}


export class PostV05SessionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  sessionResponse?: shared.SessionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
