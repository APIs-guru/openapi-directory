import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DataflowProjectsLocationsJobsSnapshotsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" })
  location: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class DataflowProjectsLocationsJobsSnapshotsListQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DataflowProjectsLocationsJobsSnapshotsListSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsLocationsJobsSnapshotsListSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsLocationsJobsSnapshotsListSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsLocationsJobsSnapshotsListSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsLocationsJobsSnapshotsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: DataflowProjectsLocationsJobsSnapshotsListSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: DataflowProjectsLocationsJobsSnapshotsListSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: DataflowProjectsLocationsJobsSnapshotsListSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: DataflowProjectsLocationsJobsSnapshotsListSecurityOption4;
}


export class DataflowProjectsLocationsJobsSnapshotsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DataflowProjectsLocationsJobsSnapshotsListPathParams;

  @SpeakeasyMetadata()
  queryParams: DataflowProjectsLocationsJobsSnapshotsListQueryParams;

  @SpeakeasyMetadata()
  security: DataflowProjectsLocationsJobsSnapshotsListSecurity;
}


export class DataflowProjectsLocationsJobsSnapshotsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSnapshotsResponse?: shared.ListSnapshotsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
