import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05ConsentRequestsOnStatusHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" })
  xHiuId: string;
}


export class PostV05ConsentRequestsOnStatusRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  hiuConsentRequestStatus?: shared.HiuConsentRequestStatus;
}


export class PostV05ConsentRequestsOnStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05ConsentRequestsOnStatusHeaders;

  @Metadata()
  request: PostV05ConsentRequestsOnStatusRequests;
}


export class PostV05ConsentRequestsOnStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
