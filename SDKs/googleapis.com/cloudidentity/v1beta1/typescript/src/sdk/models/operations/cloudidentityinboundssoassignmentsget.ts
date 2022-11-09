import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloudidentityInboundSsoAssignmentsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class CloudidentityInboundSsoAssignmentsGetQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=readMask" })
  readMask?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class CloudidentityInboundSsoAssignmentsGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudidentityInboundSsoAssignmentsGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudidentityInboundSsoAssignmentsGetSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudidentityInboundSsoAssignmentsGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CloudidentityInboundSsoAssignmentsGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CloudidentityInboundSsoAssignmentsGetSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: CloudidentityInboundSsoAssignmentsGetSecurityOption3;
}


export class CloudidentityInboundSsoAssignmentsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloudidentityInboundSsoAssignmentsGetPathParams;

  @Metadata()
  queryParams: CloudidentityInboundSsoAssignmentsGetQueryParams;

  @Metadata()
  security: CloudidentityInboundSsoAssignmentsGetSecurity;
}


export class CloudidentityInboundSsoAssignmentsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  inboundSsoAssignment?: shared.InboundSsoAssignment;

  @Metadata()
  statusCode: number;
}
