import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05HealthInformationNotifyHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-CM-ID" })
  xCmId: string;
}


export class PostV05HealthInformationNotifyRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  healthInformationNotification?: shared.HealthInformationNotification;
}


export class PostV05HealthInformationNotifyRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05HealthInformationNotifyHeaders;

  @Metadata()
  request: PostV05HealthInformationNotifyRequests;
}


export class PostV05HealthInformationNotifyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
