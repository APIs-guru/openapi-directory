import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNotificationsSummaryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetNotificationsSummarySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetNotificationsSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNotificationsSummaryPathParams;

  @SpeakeasyMetadata()
  security: GetNotificationsSummarySecurity;
}


export class GetNotificationsSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notificationsSummaryDto?: shared.NotificationsSummaryDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
