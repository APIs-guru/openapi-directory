import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PubsubProjectsSubscriptionsPullPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscription" })
  subscription: string;
}


export class PubsubProjectsSubscriptionsPullQueryParams extends SpeakeasyBase {
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


export class PubsubProjectsSubscriptionsPullSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PubsubProjectsSubscriptionsPullSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PubsubProjectsSubscriptionsPullSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PubsubProjectsSubscriptionsPullSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PubsubProjectsSubscriptionsPullSecurityOption2;
}


export class PubsubProjectsSubscriptionsPullRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PubsubProjectsSubscriptionsPullPathParams;

  @Metadata()
  queryParams: PubsubProjectsSubscriptionsPullQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.PullRequest;

  @Metadata()
  security: PubsubProjectsSubscriptionsPullSecurity;
}


export class PubsubProjectsSubscriptionsPullResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pullResponse?: shared.PullResponse;

  @Metadata()
  statusCode: number;
}
