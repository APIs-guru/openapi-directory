import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BigtableadminProjectsInstancesTablesCheckConsistencyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class BigtableadminProjectsInstancesTablesCheckConsistencyQueryParams extends SpeakeasyBase {
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


export class BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption5 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesTablesCheckConsistencySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption4;

  @Metadata({ data: "security, option=true" })
  option5?: BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption5;
}


export class BigtableadminProjectsInstancesTablesCheckConsistencyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BigtableadminProjectsInstancesTablesCheckConsistencyPathParams;

  @Metadata()
  queryParams: BigtableadminProjectsInstancesTablesCheckConsistencyQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.CheckConsistencyRequest;

  @Metadata()
  security: BigtableadminProjectsInstancesTablesCheckConsistencySecurity;
}


export class BigtableadminProjectsInstancesTablesCheckConsistencyResponse extends SpeakeasyBase {
  @Metadata()
  checkConsistencyResponse?: shared.CheckConsistencyResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
