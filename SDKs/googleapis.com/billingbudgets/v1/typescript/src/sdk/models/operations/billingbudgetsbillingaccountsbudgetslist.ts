import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BillingbudgetsBillingAccountsBudgetsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class BillingbudgetsBillingAccountsBudgetsListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class BillingbudgetsBillingAccountsBudgetsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BillingbudgetsBillingAccountsBudgetsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BillingbudgetsBillingAccountsBudgetsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: BillingbudgetsBillingAccountsBudgetsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: BillingbudgetsBillingAccountsBudgetsListSecurityOption2;
}


export class BillingbudgetsBillingAccountsBudgetsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BillingbudgetsBillingAccountsBudgetsListPathParams;

  @Metadata()
  queryParams: BillingbudgetsBillingAccountsBudgetsListQueryParams;

  @Metadata()
  security: BillingbudgetsBillingAccountsBudgetsListSecurity;
}


export class BillingbudgetsBillingAccountsBudgetsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleCloudBillingBudgetsV1ListBudgetsResponse?: shared.GoogleCloudBillingBudgetsV1ListBudgetsResponse;

  @Metadata()
  statusCode: number;
}
