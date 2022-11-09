import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class JobsProjectsTenantsCompleteQueryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenant" })
  tenant: string;
}

export enum JobsProjectsTenantsCompleteQueryScopeEnum {
    CompletionScopeUnspecified = "COMPLETION_SCOPE_UNSPECIFIED"
,    Tenant = "TENANT"
,    Public = "PUBLIC"
}

export enum JobsProjectsTenantsCompleteQueryTypeEnum {
    CompletionTypeUnspecified = "COMPLETION_TYPE_UNSPECIFIED"
,    JobTitle = "JOB_TITLE"
,    CompanyName = "COMPANY_NAME"
,    Combined = "COMBINED"
}


export class JobsProjectsTenantsCompleteQueryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=company" })
  company?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

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
  scope?: JobsProjectsTenantsCompleteQueryScopeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: JobsProjectsTenantsCompleteQueryTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class JobsProjectsTenantsCompleteQuerySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class JobsProjectsTenantsCompleteQuerySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class JobsProjectsTenantsCompleteQuerySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: JobsProjectsTenantsCompleteQuerySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: JobsProjectsTenantsCompleteQuerySecurityOption2;
}


export class JobsProjectsTenantsCompleteQueryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: JobsProjectsTenantsCompleteQueryPathParams;

  @Metadata()
  queryParams: JobsProjectsTenantsCompleteQueryQueryParams;

  @Metadata()
  security: JobsProjectsTenantsCompleteQuerySecurity;
}


export class JobsProjectsTenantsCompleteQueryResponse extends SpeakeasyBase {
  @Metadata()
  completeQueryResponse?: shared.CompleteQueryResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
