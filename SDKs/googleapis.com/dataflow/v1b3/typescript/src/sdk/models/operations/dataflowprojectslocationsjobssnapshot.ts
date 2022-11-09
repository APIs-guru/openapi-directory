import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DataflowProjectsLocationsJobsSnapshotPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=location" })
  location: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class DataflowProjectsLocationsJobsSnapshotQueryParams extends SpeakeasyBase {
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


export class DataflowProjectsLocationsJobsSnapshotSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsLocationsJobsSnapshotSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsLocationsJobsSnapshotSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsLocationsJobsSnapshotSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsLocationsJobsSnapshotSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DataflowProjectsLocationsJobsSnapshotSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DataflowProjectsLocationsJobsSnapshotSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DataflowProjectsLocationsJobsSnapshotSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: DataflowProjectsLocationsJobsSnapshotSecurityOption4;
}


export class DataflowProjectsLocationsJobsSnapshotRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DataflowProjectsLocationsJobsSnapshotPathParams;

  @Metadata()
  queryParams: DataflowProjectsLocationsJobsSnapshotQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.SnapshotJobRequest;

  @Metadata()
  security: DataflowProjectsLocationsJobsSnapshotSecurity;
}


export class DataflowProjectsLocationsJobsSnapshotResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  snapshot?: shared.Snapshot;

  @Metadata()
  statusCode: number;
}
