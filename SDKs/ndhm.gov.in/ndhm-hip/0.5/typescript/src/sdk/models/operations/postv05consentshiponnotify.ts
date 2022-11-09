import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05ConsentsHipOnNotifyHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-CM-ID" })
  xCmId: string;
}


export class PostV05ConsentsHipOnNotifyRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  hipConsentNotificationResponse?: shared.HipConsentNotificationResponse;
}


export class PostV05ConsentsHipOnNotifyRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05ConsentsHipOnNotifyHeaders;

  @Metadata()
  request: PostV05ConsentsHipOnNotifyRequests;
}


export class PostV05ConsentsHipOnNotifyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
