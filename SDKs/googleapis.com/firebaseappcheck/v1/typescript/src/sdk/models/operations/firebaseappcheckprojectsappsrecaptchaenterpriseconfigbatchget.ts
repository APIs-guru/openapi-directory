import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=names" })
  names?: string[];

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


export class FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption2;
}


export class FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetPathParams;

  @Metadata()
  queryParams: FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetQueryParams;

  @Metadata()
  security: FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurity;
}


export class FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse?: shared.GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse;

  @Metadata()
  statusCode: number;
}
