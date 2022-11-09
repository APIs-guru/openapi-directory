import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PubsubProjectsSubscriptionsModifyPushConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscription" })
  subscription: string;
}


export class PubsubProjectsSubscriptionsModifyPushConfigQueryParams extends SpeakeasyBase {
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


export class PubsubProjectsSubscriptionsModifyPushConfigSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PubsubProjectsSubscriptionsModifyPushConfigSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PubsubProjectsSubscriptionsModifyPushConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PubsubProjectsSubscriptionsModifyPushConfigSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PubsubProjectsSubscriptionsModifyPushConfigSecurityOption2;
}


export class PubsubProjectsSubscriptionsModifyPushConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PubsubProjectsSubscriptionsModifyPushConfigPathParams;

  @Metadata()
  queryParams: PubsubProjectsSubscriptionsModifyPushConfigQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ModifyPushConfigRequest;

  @Metadata()
  security: PubsubProjectsSubscriptionsModifyPushConfigSecurity;
}


export class PubsubProjectsSubscriptionsModifyPushConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
