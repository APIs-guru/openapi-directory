import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloudidentityGroupsMembershipsCheckTransitiveMembershipPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class CloudidentityGroupsMembershipsCheckTransitiveMembershipQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption3;
}


export class CloudidentityGroupsMembershipsCheckTransitiveMembershipRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloudidentityGroupsMembershipsCheckTransitiveMembershipPathParams;

  @SpeakeasyMetadata()
  queryParams: CloudidentityGroupsMembershipsCheckTransitiveMembershipQueryParams;

  @SpeakeasyMetadata()
  security: CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurity;
}


export class CloudidentityGroupsMembershipsCheckTransitiveMembershipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checkTransitiveMembershipResponse?: shared.CheckTransitiveMembershipResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
