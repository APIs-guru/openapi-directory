import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloudidentityGroupsMembershipsLookupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class CloudidentityGroupsMembershipsLookupQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=memberKey.id" })
  memberKeyId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=memberKey.namespace" })
  memberKeyNamespace?: string;

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


export class CloudidentityGroupsMembershipsLookupSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudidentityGroupsMembershipsLookupSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudidentityGroupsMembershipsLookupSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudidentityGroupsMembershipsLookupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: CloudidentityGroupsMembershipsLookupSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: CloudidentityGroupsMembershipsLookupSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: CloudidentityGroupsMembershipsLookupSecurityOption3;
}


export class CloudidentityGroupsMembershipsLookupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloudidentityGroupsMembershipsLookupPathParams;

  @SpeakeasyMetadata()
  queryParams: CloudidentityGroupsMembershipsLookupQueryParams;

  @SpeakeasyMetadata()
  security: CloudidentityGroupsMembershipsLookupSecurity;
}


export class CloudidentityGroupsMembershipsLookupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  lookupMembershipNameResponse?: shared.LookupMembershipNameResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
