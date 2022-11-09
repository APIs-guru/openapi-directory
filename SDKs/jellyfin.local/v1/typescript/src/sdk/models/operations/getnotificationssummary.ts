import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNotificationsSummaryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetNotificationsSummarySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetNotificationsSummaryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNotificationsSummaryPathParams;

  @Metadata()
  security: GetNotificationsSummarySecurity;
}


export class GetNotificationsSummaryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notificationsSummaryDto?: shared.NotificationsSummaryDto;

  @Metadata()
  statusCode: number;
}
