import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNotificationsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetNotificationsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetNotificationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetNotificationsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetNotificationsSecurityOption2;
}


export class GetNotificationsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetNotificationsSecurity;
}


export class GetNotifications200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Notification })
  data?: shared.Notification[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetNotificationsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetNotificationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNotifications200ApplicationJsonObject?: GetNotifications200ApplicationJson;

  @Metadata()
  getNotificationsDefaultApplicationJsonObject?: GetNotificationsDefaultApplicationJson;
}
