import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PubsubProjectsSubscriptionsModifyPushConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription" })
  subscription: string;
}


export class PubsubProjectsSubscriptionsModifyPushConfigQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class PubsubProjectsSubscriptionsModifyPushConfigSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PubsubProjectsSubscriptionsModifyPushConfigSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PubsubProjectsSubscriptionsModifyPushConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: PubsubProjectsSubscriptionsModifyPushConfigSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: PubsubProjectsSubscriptionsModifyPushConfigSecurityOption2;
}


export class PubsubProjectsSubscriptionsModifyPushConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PubsubProjectsSubscriptionsModifyPushConfigPathParams;

  @SpeakeasyMetadata()
  queryParams: PubsubProjectsSubscriptionsModifyPushConfigQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ModifyPushConfigRequest;

  @SpeakeasyMetadata()
  security: PubsubProjectsSubscriptionsModifyPushConfigSecurity;
}


export class PubsubProjectsSubscriptionsModifyPushConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
