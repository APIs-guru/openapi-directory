import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05SessionsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  sessionRequest?: shared.SessionRequest;
}


export class PostV05SessionsRequest extends SpeakeasyBase {
  @Metadata()
  request: PostV05SessionsRequests;
}


export class PostV05SessionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  sessionResponse?: shared.SessionResponse;

  @Metadata()
  statusCode: number;
}
