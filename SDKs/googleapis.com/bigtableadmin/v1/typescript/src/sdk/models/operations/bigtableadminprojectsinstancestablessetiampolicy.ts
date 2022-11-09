import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BigtableadminProjectsInstancesTablesSetIamPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=resource" })
  resource: string;
}


export class BigtableadminProjectsInstancesTablesSetIamPolicyQueryParams extends SpeakeasyBase {
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


export class BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption5 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption6 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesTablesSetIamPolicySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption4;

  @Metadata({ data: "security, option=true" })
  option5?: BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption5;

  @Metadata({ data: "security, option=true" })
  option6?: BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption6;
}


export class BigtableadminProjectsInstancesTablesSetIamPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BigtableadminProjectsInstancesTablesSetIamPolicyPathParams;

  @Metadata()
  queryParams: BigtableadminProjectsInstancesTablesSetIamPolicyQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.SetIamPolicyRequest;

  @Metadata()
  security: BigtableadminProjectsInstancesTablesSetIamPolicySecurity;
}


export class BigtableadminProjectsInstancesTablesSetIamPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  policy?: shared.Policy;

  @Metadata()
  statusCode: number;
}
