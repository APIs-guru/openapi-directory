import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05ConsentRequestsStatusHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostV05ConsentRequestsStatusRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  consentRequestStatusRequest?: shared.ConsentRequestStatusRequest;
}


export class PostV05ConsentRequestsStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05ConsentRequestsStatusHeaders;

  @SpeakeasyMetadata()
  request: PostV05ConsentRequestsStatusRequests;
}


export class PostV05ConsentRequestsStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
