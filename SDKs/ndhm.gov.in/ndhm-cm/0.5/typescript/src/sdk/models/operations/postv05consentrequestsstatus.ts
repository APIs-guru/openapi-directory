import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05ConsentRequestsStatusHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostV05ConsentRequestsStatusRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  consentRequestStatusRequest?: shared.ConsentRequestStatusRequest;
}


export class PostV05ConsentRequestsStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05ConsentRequestsStatusHeaders;

  @Metadata()
  request: PostV05ConsentRequestsStatusRequests;
}


export class PostV05ConsentRequestsStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
