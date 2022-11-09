import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FirebaseProjectsRemoveAnalyticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class FirebaseProjectsRemoveAnalyticsQueryParams extends SpeakeasyBase {
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


export class FirebaseProjectsRemoveAnalyticsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirebaseProjectsRemoveAnalyticsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirebaseProjectsRemoveAnalyticsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: FirebaseProjectsRemoveAnalyticsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: FirebaseProjectsRemoveAnalyticsSecurityOption2;
}


export class FirebaseProjectsRemoveAnalyticsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FirebaseProjectsRemoveAnalyticsPathParams;

  @Metadata()
  queryParams: FirebaseProjectsRemoveAnalyticsQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.RemoveAnalyticsRequest;

  @Metadata()
  security: FirebaseProjectsRemoveAnalyticsSecurity;
}


export class FirebaseProjectsRemoveAnalyticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
