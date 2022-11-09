import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNotificationTypesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetNotificationTypesRequest extends SpeakeasyBase {
  @Metadata()
  security: GetNotificationTypesSecurity;
}


export class GetNotificationTypesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.NotificationTypeInfo })
  notificationTypeInfos?: shared.NotificationTypeInfo[];

  @Metadata()
  statusCode: number;
}
