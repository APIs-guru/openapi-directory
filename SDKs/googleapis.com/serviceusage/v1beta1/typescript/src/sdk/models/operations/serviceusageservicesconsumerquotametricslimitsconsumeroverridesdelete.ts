import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteForceOnlyEnum {
    QuotaSafetyCheckUnspecified = "QUOTA_SAFETY_CHECK_UNSPECIFIED"
,    LimitDecreaseBelowUsage = "LIMIT_DECREASE_BELOW_USAGE"
,    LimitDecreasePercentageTooHigh = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"
}


export class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=forceOnly" })
  forceOnly?: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteForceOnlyEnum[];

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


export class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption2;
}


export class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeletePathParams;

  @Metadata()
  queryParams: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteQueryParams;

  @Metadata()
  security: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurity;
}


export class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  operation?: shared.Operation;

  @Metadata()
  statusCode: number;
}
