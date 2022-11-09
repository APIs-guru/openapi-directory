import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DataprocProjectsRegionsJobsSubmitPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=region" })
  region: string;
}


export class DataprocProjectsRegionsJobsSubmitQueryParams extends SpeakeasyBase {
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


export class DataprocProjectsRegionsJobsSubmitSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataprocProjectsRegionsJobsSubmitRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DataprocProjectsRegionsJobsSubmitPathParams;

  @Metadata()
  queryParams: DataprocProjectsRegionsJobsSubmitQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.SubmitJobRequest;

  @Metadata()
  security: DataprocProjectsRegionsJobsSubmitSecurity;
}


export class DataprocProjectsRegionsJobsSubmitResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  job?: shared.Job;

  @Metadata()
  statusCode: number;
}
