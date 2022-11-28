import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BigtableadminProjectsInstancesClustersBackupsCopyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class BigtableadminProjectsInstancesClustersBackupsCopyQueryParams extends SpeakeasyBase {
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


export class BigtableadminProjectsInstancesClustersBackupsCopySecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesClustersBackupsCopySecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesClustersBackupsCopySecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesClustersBackupsCopySecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesClustersBackupsCopySecurityOption5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesClustersBackupsCopySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: BigtableadminProjectsInstancesClustersBackupsCopySecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: BigtableadminProjectsInstancesClustersBackupsCopySecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: BigtableadminProjectsInstancesClustersBackupsCopySecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: BigtableadminProjectsInstancesClustersBackupsCopySecurityOption4;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option5?: BigtableadminProjectsInstancesClustersBackupsCopySecurityOption5;
}


export class BigtableadminProjectsInstancesClustersBackupsCopyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BigtableadminProjectsInstancesClustersBackupsCopyPathParams;

  @SpeakeasyMetadata()
  queryParams: BigtableadminProjectsInstancesClustersBackupsCopyQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CopyBackupRequest;

  @SpeakeasyMetadata()
  security: BigtableadminProjectsInstancesClustersBackupsCopySecurity;
}


export class BigtableadminProjectsInstancesClustersBackupsCopyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  operation?: shared.Operation;

  @SpeakeasyMetadata()
  statusCode: number;
}
