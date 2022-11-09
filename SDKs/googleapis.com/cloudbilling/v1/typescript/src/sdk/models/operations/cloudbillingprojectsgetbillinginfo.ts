import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloudbillingProjectsGetBillingInfoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class CloudbillingProjectsGetBillingInfoQueryParams extends SpeakeasyBase {
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


export class CloudbillingProjectsGetBillingInfoSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudbillingProjectsGetBillingInfoSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudbillingProjectsGetBillingInfoSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudbillingProjectsGetBillingInfoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CloudbillingProjectsGetBillingInfoSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CloudbillingProjectsGetBillingInfoSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: CloudbillingProjectsGetBillingInfoSecurityOption3;
}


export class CloudbillingProjectsGetBillingInfoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloudbillingProjectsGetBillingInfoPathParams;

  @Metadata()
  queryParams: CloudbillingProjectsGetBillingInfoQueryParams;

  @Metadata()
  security: CloudbillingProjectsGetBillingInfoSecurity;
}


export class CloudbillingProjectsGetBillingInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  projectBillingInfo?: shared.ProjectBillingInfo;

  @Metadata()
  statusCode: number;
}
