import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ServiceusageServicesConsumerQuotaMetricsLimitsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum ServiceusageServicesConsumerQuotaMetricsLimitsGetViewEnum {
    QuotaViewUnspecified = "QUOTA_VIEW_UNSPECIFIED"
,    Basic = "BASIC"
,    Full = "FULL"
}


export class ServiceusageServicesConsumerQuotaMetricsLimitsGetQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: ServiceusageServicesConsumerQuotaMetricsLimitsGetViewEnum;
}


export class ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurityOption2;
}


export class ServiceusageServicesConsumerQuotaMetricsLimitsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ServiceusageServicesConsumerQuotaMetricsLimitsGetPathParams;

  @Metadata()
  queryParams: ServiceusageServicesConsumerQuotaMetricsLimitsGetQueryParams;

  @Metadata()
  security: ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurity;
}


export class ServiceusageServicesConsumerQuotaMetricsLimitsGetResponse extends SpeakeasyBase {
  @Metadata()
  consumerQuotaLimit?: shared.ConsumerQuotaLimit;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
