import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNotificationTypesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetNotificationTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetNotificationTypesSecurity;
}


export class GetNotificationTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.NotificationTypeInfo })
  notificationTypeInfos?: shared.NotificationTypeInfo[];

  @SpeakeasyMetadata()
  statusCode: number;
}
