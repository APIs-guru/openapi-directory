import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAdminNotificationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=level" })
  level?: shared.NotificationLevelEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=url" })
  url?: string;
}


export class CreateAdminNotificationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class CreateAdminNotificationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateAdminNotificationQueryParams;

  @Metadata()
  security: CreateAdminNotificationSecurity;
}


export class CreateAdminNotificationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
