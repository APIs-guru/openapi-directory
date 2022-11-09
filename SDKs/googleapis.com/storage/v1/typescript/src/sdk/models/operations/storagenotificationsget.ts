import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StorageNotificationsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=notification" })
  notification: string;
}


export class StorageNotificationsGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userProject" })
  userProject?: string;
}


export class StorageNotificationsGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageNotificationsGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageNotificationsGetSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageNotificationsGetSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageNotificationsGetSecurityOption5 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageNotificationsGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: StorageNotificationsGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: StorageNotificationsGetSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: StorageNotificationsGetSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: StorageNotificationsGetSecurityOption4;

  @Metadata({ data: "security, option=true" })
  option5?: StorageNotificationsGetSecurityOption5;
}


export class StorageNotificationsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StorageNotificationsGetPathParams;

  @Metadata()
  queryParams: StorageNotificationsGetQueryParams;

  @Metadata()
  security: StorageNotificationsGetSecurity;
}


export class StorageNotificationsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notification?: shared.Notification;

  @Metadata()
  statusCode: number;
}
