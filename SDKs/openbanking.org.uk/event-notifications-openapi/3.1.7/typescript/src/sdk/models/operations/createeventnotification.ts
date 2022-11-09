import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateEventNotificationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-fapi-financial-id" })
  xFapiFinancialId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" })
  xFapiInteractionId?: string;
}


export class CreateEventNotificationRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateEventNotificationHeaders;

  @Metadata({ data: "request, media_type=application/jwt" })
  request: string;
}


export class CreateEventNotificationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
