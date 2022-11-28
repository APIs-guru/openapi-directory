import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnum {
    QuotaSafetyCheckUnspecified = "QUOTA_SAFETY_CHECK_UNSPECIFIED",
    LimitDecreaseBelowUsage = "LIMIT_DECREASE_BELOW_USAGE",
    LimitDecreasePercentageTooHigh = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"
}


export class ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forceOnly" })
  forceOnly?: ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

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


export class ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption2;
}


export class ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.QuotaOverride;

  @SpeakeasyMetadata()
  security: ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurity;
}


export class ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  operation?: shared.Operation;

  @SpeakeasyMetadata()
  statusCode: number;
}
