import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FormsFormsWatchesRenewPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=formId" })
  formId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=watchId" })
  watchId: string;
}


export class FormsFormsWatchesRenewQueryParams extends SpeakeasyBase {
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


export class FormsFormsWatchesRenewSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FormsFormsWatchesRenewSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FormsFormsWatchesRenewSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FormsFormsWatchesRenewSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FormsFormsWatchesRenewSecurityOption5 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FormsFormsWatchesRenewSecurityOption6 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FormsFormsWatchesRenewSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: FormsFormsWatchesRenewSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: FormsFormsWatchesRenewSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: FormsFormsWatchesRenewSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: FormsFormsWatchesRenewSecurityOption4;

  @Metadata({ data: "security, option=true" })
  option5?: FormsFormsWatchesRenewSecurityOption5;

  @Metadata({ data: "security, option=true" })
  option6?: FormsFormsWatchesRenewSecurityOption6;
}


export class FormsFormsWatchesRenewRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FormsFormsWatchesRenewPathParams;

  @Metadata()
  queryParams: FormsFormsWatchesRenewQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;

  @Metadata()
  security: FormsFormsWatchesRenewSecurity;
}


export class FormsFormsWatchesRenewResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  watch?: shared.Watch;
}
