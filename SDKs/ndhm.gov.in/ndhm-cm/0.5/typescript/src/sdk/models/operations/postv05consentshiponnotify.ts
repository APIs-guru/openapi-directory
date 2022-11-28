import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05ConsentsHipOnNotifyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostV05ConsentsHipOnNotifyRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  hipConsentNotificationResponse?: shared.HipConsentNotificationResponse;
}


export class PostV05ConsentsHipOnNotifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05ConsentsHipOnNotifyHeaders;

  @SpeakeasyMetadata()
  request: PostV05ConsentsHipOnNotifyRequests;
}


export class PostV05ConsentsHipOnNotifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
