import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateEventNotificationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-financial-id" })
  xFapiFinancialId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" })
  xFapiInteractionId?: string;
}


export class CreateEventNotificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateEventNotificationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/jwt" })
  request: string;
}


export class CreateEventNotificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
