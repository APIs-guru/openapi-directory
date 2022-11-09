import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FcmProjectsMessagesSendPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class FcmProjectsMessagesSendQueryParams extends SpeakeasyBase {
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


export class FcmProjectsMessagesSendSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FcmProjectsMessagesSendSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FcmProjectsMessagesSendSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: FcmProjectsMessagesSendSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: FcmProjectsMessagesSendSecurityOption2;
}


export class FcmProjectsMessagesSendRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FcmProjectsMessagesSendPathParams;

  @Metadata()
  queryParams: FcmProjectsMessagesSendQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.SendMessageRequest;

  @Metadata()
  security: FcmProjectsMessagesSendSecurity;
}


export class FcmProjectsMessagesSendResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  message?: shared.Message;

  @Metadata()
  statusCode: number;
}
