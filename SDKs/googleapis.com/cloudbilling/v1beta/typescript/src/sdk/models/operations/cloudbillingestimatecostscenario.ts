import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloudbillingEstimateCostScenarioQueryParams extends SpeakeasyBase {
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


export class CloudbillingEstimateCostScenarioSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudbillingEstimateCostScenarioSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudbillingEstimateCostScenarioSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudbillingEstimateCostScenarioSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CloudbillingEstimateCostScenarioSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CloudbillingEstimateCostScenarioSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: CloudbillingEstimateCostScenarioSecurityOption3;
}


export class CloudbillingEstimateCostScenarioRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CloudbillingEstimateCostScenarioQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.EstimateCostScenarioWithListPriceRequest;

  @Metadata()
  security: CloudbillingEstimateCostScenarioSecurity;
}


export class CloudbillingEstimateCostScenarioResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  estimateCostScenarioWithListPriceResponse?: shared.EstimateCostScenarioWithListPriceResponse;

  @Metadata()
  statusCode: number;
}
