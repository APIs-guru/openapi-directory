import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=customer" })
  customer: string;
}


export class ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingQueryParams extends SpeakeasyBase {
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


export class ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurityOption2;
}


export class ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingPathParams;

  @Metadata()
  queryParams: ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest;

  @Metadata()
  security: ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurity;
}


export class ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleChromePolicyVersionsV1ListGroupPriorityOrderingResponse?: shared.GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse;

  @Metadata()
  statusCode: number;
}
