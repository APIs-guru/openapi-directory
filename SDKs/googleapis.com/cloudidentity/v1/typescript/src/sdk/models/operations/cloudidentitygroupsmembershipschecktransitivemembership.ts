import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloudidentityGroupsMembershipsCheckTransitiveMembershipPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class CloudidentityGroupsMembershipsCheckTransitiveMembershipQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption3;
}


export class CloudidentityGroupsMembershipsCheckTransitiveMembershipRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloudidentityGroupsMembershipsCheckTransitiveMembershipPathParams;

  @Metadata()
  queryParams: CloudidentityGroupsMembershipsCheckTransitiveMembershipQueryParams;

  @Metadata()
  security: CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurity;
}


export class CloudidentityGroupsMembershipsCheckTransitiveMembershipResponse extends SpeakeasyBase {
  @Metadata()
  checkTransitiveMembershipResponse?: shared.CheckTransitiveMembershipResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
