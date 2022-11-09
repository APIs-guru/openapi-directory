import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloudbillingBillingAccountsTestIamPermissionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=resource" })
  resource: string;
}


export class CloudbillingBillingAccountsTestIamPermissionsQueryParams extends SpeakeasyBase {
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


export class CloudbillingBillingAccountsTestIamPermissionsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudbillingBillingAccountsTestIamPermissionsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudbillingBillingAccountsTestIamPermissionsSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudbillingBillingAccountsTestIamPermissionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CloudbillingBillingAccountsTestIamPermissionsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CloudbillingBillingAccountsTestIamPermissionsSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: CloudbillingBillingAccountsTestIamPermissionsSecurityOption3;
}


export class CloudbillingBillingAccountsTestIamPermissionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloudbillingBillingAccountsTestIamPermissionsPathParams;

  @Metadata()
  queryParams: CloudbillingBillingAccountsTestIamPermissionsQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.TestIamPermissionsRequest;

  @Metadata()
  security: CloudbillingBillingAccountsTestIamPermissionsSecurity;
}


export class CloudbillingBillingAccountsTestIamPermissionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
