import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BigtableadminProjectsInstancesTablesDropRowRangePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class BigtableadminProjectsInstancesTablesDropRowRangeQueryParams extends SpeakeasyBase {
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


export class BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption5 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesTablesDropRowRangeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption4;

  @Metadata({ data: "security, option=true" })
  option5?: BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption5;
}


export class BigtableadminProjectsInstancesTablesDropRowRangeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BigtableadminProjectsInstancesTablesDropRowRangePathParams;

  @Metadata()
  queryParams: BigtableadminProjectsInstancesTablesDropRowRangeQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.DropRowRangeRequest;

  @Metadata()
  security: BigtableadminProjectsInstancesTablesDropRowRangeSecurity;
}


export class BigtableadminProjectsInstancesTablesDropRowRangeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
