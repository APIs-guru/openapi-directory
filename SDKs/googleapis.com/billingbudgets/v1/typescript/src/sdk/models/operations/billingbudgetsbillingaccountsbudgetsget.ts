import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BillingbudgetsBillingAccountsBudgetsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class BillingbudgetsBillingAccountsBudgetsGetQueryParams extends SpeakeasyBase {
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


export class BillingbudgetsBillingAccountsBudgetsGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BillingbudgetsBillingAccountsBudgetsGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BillingbudgetsBillingAccountsBudgetsGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: BillingbudgetsBillingAccountsBudgetsGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: BillingbudgetsBillingAccountsBudgetsGetSecurityOption2;
}


export class BillingbudgetsBillingAccountsBudgetsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BillingbudgetsBillingAccountsBudgetsGetPathParams;

  @Metadata()
  queryParams: BillingbudgetsBillingAccountsBudgetsGetQueryParams;

  @Metadata()
  security: BillingbudgetsBillingAccountsBudgetsGetSecurity;
}


export class BillingbudgetsBillingAccountsBudgetsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleCloudBillingBudgetsV1Budget?: shared.GoogleCloudBillingBudgetsV1Budget;

  @Metadata()
  statusCode: number;
}
