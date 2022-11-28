import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BigtableadminProjectsInstancesClustersBackupsPatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class BigtableadminProjectsInstancesClustersBackupsPatchQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" })
  updateMask?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesClustersBackupsPatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption4;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option5?: BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption5;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option6?: BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption6;
}


export class BigtableadminProjectsInstancesClustersBackupsPatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BigtableadminProjectsInstancesClustersBackupsPatchPathParams;

  @SpeakeasyMetadata()
  queryParams: BigtableadminProjectsInstancesClustersBackupsPatchQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BackupInput;

  @SpeakeasyMetadata()
  security: BigtableadminProjectsInstancesClustersBackupsPatchSecurity;
}


export class BigtableadminProjectsInstancesClustersBackupsPatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  backup?: shared.Backup;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
