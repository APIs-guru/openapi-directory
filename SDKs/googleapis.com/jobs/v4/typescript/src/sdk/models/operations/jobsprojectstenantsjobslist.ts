import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class JobsProjectsTenantsJobsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum JobsProjectsTenantsJobsListJobViewEnum {
    JobViewUnspecified = "JOB_VIEW_UNSPECIFIED",
    JobViewIdOnly = "JOB_VIEW_ID_ONLY",
    JobViewMinimal = "JOB_VIEW_MINIMAL",
    JobViewSmall = "JOB_VIEW_SMALL",
    JobViewFull = "JOB_VIEW_FULL"
}


export class JobsProjectsTenantsJobsListQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jobView" })
  jobView?: JobsProjectsTenantsJobsListJobViewEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class JobsProjectsTenantsJobsListSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class JobsProjectsTenantsJobsListSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class JobsProjectsTenantsJobsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: JobsProjectsTenantsJobsListSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: JobsProjectsTenantsJobsListSecurityOption2;
}


export class JobsProjectsTenantsJobsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: JobsProjectsTenantsJobsListPathParams;

  @SpeakeasyMetadata()
  queryParams: JobsProjectsTenantsJobsListQueryParams;

  @SpeakeasyMetadata()
  security: JobsProjectsTenantsJobsListSecurity;
}


export class JobsProjectsTenantsJobsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listJobsResponse?: shared.ListJobsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
