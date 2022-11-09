import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FormsFormsResponsesGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=formId" })
  formId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=responseId" })
  responseId: string;
}


export class FormsFormsResponsesGetQueryParams extends SpeakeasyBase {
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


export class FormsFormsResponsesGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FormsFormsResponsesGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FormsFormsResponsesGetSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FormsFormsResponsesGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: FormsFormsResponsesGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: FormsFormsResponsesGetSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: FormsFormsResponsesGetSecurityOption3;
}


export class FormsFormsResponsesGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FormsFormsResponsesGetPathParams;

  @Metadata()
  queryParams: FormsFormsResponsesGetQueryParams;

  @Metadata()
  security: FormsFormsResponsesGetSecurity;
}


export class FormsFormsResponsesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  formResponse?: shared.FormResponse;

  @Metadata()
  statusCode: number;
}
