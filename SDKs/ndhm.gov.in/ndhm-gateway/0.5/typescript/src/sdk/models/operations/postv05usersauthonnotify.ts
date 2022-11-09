import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05UsersAuthOnNotifyHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-CM-ID" })
  xCmId: string;
}


export class PostV05UsersAuthOnNotifyRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  patientAuthNotificationAcknowledgement?: shared.PatientAuthNotificationAcknowledgement;
}


export class PostV05UsersAuthOnNotifyRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05UsersAuthOnNotifyHeaders;

  @Metadata()
  request: PostV05UsersAuthOnNotifyRequests;
}


export class PostV05UsersAuthOnNotifyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
