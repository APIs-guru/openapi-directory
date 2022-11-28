import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05HealthInformationNotifyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-CM-ID" })
  xCmId: string;
}


export class PostV05HealthInformationNotifyRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  healthInformationNotification?: shared.HealthInformationNotification;
}


export class PostV05HealthInformationNotifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05HealthInformationNotifyHeaders;

  @SpeakeasyMetadata()
  request: PostV05HealthInformationNotifyRequests;
}


export class PostV05HealthInformationNotifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
