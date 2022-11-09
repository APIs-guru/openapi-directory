import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DataprocProjectsRegionsJobsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=region" })
  region: string;
}

export enum DataprocProjectsRegionsJobsListJobStateMatcherEnum {
    All = "ALL"
,    Active = "ACTIVE"
,    NonActive = "NON_ACTIVE"
}


export class DataprocProjectsRegionsJobsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=clusterName" })
  clusterName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jobStateMatcher" })
  jobStateMatcher?: DataprocProjectsRegionsJobsListJobStateMatcherEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DataprocProjectsRegionsJobsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataprocProjectsRegionsJobsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DataprocProjectsRegionsJobsListPathParams;

  @Metadata()
  queryParams: DataprocProjectsRegionsJobsListQueryParams;

  @Metadata()
  security: DataprocProjectsRegionsJobsListSecurity;
}


export class DataprocProjectsRegionsJobsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listJobsResponse?: shared.ListJobsResponse;

  @Metadata()
  statusCode: number;
}
