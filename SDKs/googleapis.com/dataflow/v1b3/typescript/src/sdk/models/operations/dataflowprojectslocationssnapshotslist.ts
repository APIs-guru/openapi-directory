import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DataflowProjectsLocationsSnapshotsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location" })
  location: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class DataflowProjectsLocationsSnapshotsListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=jobId" })
  jobId?: string;

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


export class DataflowProjectsLocationsSnapshotsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsLocationsSnapshotsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsLocationsSnapshotsListSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsLocationsSnapshotsListSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsLocationsSnapshotsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DataflowProjectsLocationsSnapshotsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DataflowProjectsLocationsSnapshotsListSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DataflowProjectsLocationsSnapshotsListSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: DataflowProjectsLocationsSnapshotsListSecurityOption4;
}


export class DataflowProjectsLocationsSnapshotsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DataflowProjectsLocationsSnapshotsListPathParams;

  @Metadata()
  queryParams: DataflowProjectsLocationsSnapshotsListQueryParams;

  @Metadata()
  security: DataflowProjectsLocationsSnapshotsListSecurity;
}


export class DataflowProjectsLocationsSnapshotsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSnapshotsResponse?: shared.ListSnapshotsResponse;

  @Metadata()
  statusCode: number;
}
