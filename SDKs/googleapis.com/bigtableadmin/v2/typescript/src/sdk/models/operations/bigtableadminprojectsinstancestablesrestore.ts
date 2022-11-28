import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BigtableadminProjectsInstancesTablesRestorePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class BigtableadminProjectsInstancesTablesRestoreQueryParams extends SpeakeasyBase {
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


export class BigtableadminProjectsInstancesTablesRestoreSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesTablesRestoreSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesTablesRestoreSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesTablesRestoreSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesTablesRestoreSecurityOption5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesTablesRestoreSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: BigtableadminProjectsInstancesTablesRestoreSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: BigtableadminProjectsInstancesTablesRestoreSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: BigtableadminProjectsInstancesTablesRestoreSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: BigtableadminProjectsInstancesTablesRestoreSecurityOption4;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option5?: BigtableadminProjectsInstancesTablesRestoreSecurityOption5;
}


export class BigtableadminProjectsInstancesTablesRestoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BigtableadminProjectsInstancesTablesRestorePathParams;

  @SpeakeasyMetadata()
  queryParams: BigtableadminProjectsInstancesTablesRestoreQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.RestoreTableRequest;

  @SpeakeasyMetadata()
  security: BigtableadminProjectsInstancesTablesRestoreSecurity;
}


export class BigtableadminProjectsInstancesTablesRestoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  operation?: shared.Operation;

  @SpeakeasyMetadata()
  statusCode: number;
}
