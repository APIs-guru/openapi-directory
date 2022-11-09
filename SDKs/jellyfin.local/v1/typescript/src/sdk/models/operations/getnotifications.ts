import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNotificationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetNotificationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetNotificationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNotificationsPathParams;

  @Metadata()
  security: GetNotificationsSecurity;
}


export class GetNotificationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notificationResultDto?: shared.NotificationResultDto;

  @Metadata()
  statusCode: number;
}
