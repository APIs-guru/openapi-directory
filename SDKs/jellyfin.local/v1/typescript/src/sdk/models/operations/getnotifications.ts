import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNotificationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetNotificationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetNotificationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNotificationsPathParams;

  @SpeakeasyMetadata()
  security: GetNotificationsSecurity;
}


export class GetNotificationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notificationResultDto?: shared.NotificationResultDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
