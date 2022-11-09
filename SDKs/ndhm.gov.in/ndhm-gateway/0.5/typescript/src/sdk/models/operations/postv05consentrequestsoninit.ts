import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05ConsentRequestsOnInitHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" })
  xHiuId: string;
}


export class PostV05ConsentRequestsOnInitRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  consentRequestInitResponse?: shared.ConsentRequestInitResponse;
}


export class PostV05ConsentRequestsOnInitRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05ConsentRequestsOnInitHeaders;

  @Metadata()
  request: PostV05ConsentRequestsOnInitRequests;
}


export class PostV05ConsentRequestsOnInitResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
