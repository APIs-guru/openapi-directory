import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class JobsProjectsCompletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum JobsProjectsCompleteScopeEnum {
    CompletionScopeUnspecified = "COMPLETION_SCOPE_UNSPECIFIED"
,    Tenant = "TENANT"
,    Public = "PUBLIC"
}

export enum JobsProjectsCompleteTypeEnum {
    CompletionTypeUnspecified = "COMPLETION_TYPE_UNSPECIFIED"
,    JobTitle = "JOB_TITLE"
,    CompanyName = "COMPANY_NAME"
,    Combined = "COMBINED"
}


export class JobsProjectsCompleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=companyName" })
  companyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=languageCodes" })
  languageCodes?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope?: JobsProjectsCompleteScopeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: JobsProjectsCompleteTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class JobsProjectsCompleteSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class JobsProjectsCompleteSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class JobsProjectsCompleteSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: JobsProjectsCompleteSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: JobsProjectsCompleteSecurityOption2;
}


export class JobsProjectsCompleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: JobsProjectsCompletePathParams;

  @Metadata()
  queryParams: JobsProjectsCompleteQueryParams;

  @Metadata()
  security: JobsProjectsCompleteSecurity;
}


export class JobsProjectsCompleteResponse extends SpeakeasyBase {
  @Metadata()
  completeQueryResponse?: shared.CompleteQueryResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
