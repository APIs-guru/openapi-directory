import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MonitoringProjectsNotificationChannelsGetVerificationCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringProjectsNotificationChannelsGetVerificationCodeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption2;
}


export class MonitoringProjectsNotificationChannelsGetVerificationCodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MonitoringProjectsNotificationChannelsGetVerificationCodePathParams;

  @Metadata()
  queryParams: MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.GetNotificationChannelVerificationCodeRequest;

  @Metadata()
  security: MonitoringProjectsNotificationChannelsGetVerificationCodeSecurity;
}


export class MonitoringProjectsNotificationChannelsGetVerificationCodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getNotificationChannelVerificationCodeResponse?: shared.GetNotificationChannelVerificationCodeResponse;

  @Metadata()
  statusCode: number;
}
