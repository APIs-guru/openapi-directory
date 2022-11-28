import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const PostV05ConsentRequestsOnStatusServerList = [
	"https://dev.ndhm.gov.in/hiu",
] as const;


export class PostV05ConsentRequestsOnStatusHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" })
  xHiuId: string;
}


export class PostV05ConsentRequestsOnStatusRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  hiuConsentRequestStatus?: shared.HiuConsentRequestStatus;
}


export class PostV05ConsentRequestsOnStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  headers: PostV05ConsentRequestsOnStatusHeaders;

  @SpeakeasyMetadata()
  request: PostV05ConsentRequestsOnStatusRequests;
}


export class PostV05ConsentRequestsOnStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
