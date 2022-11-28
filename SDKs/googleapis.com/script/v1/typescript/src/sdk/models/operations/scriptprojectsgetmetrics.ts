import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ScriptProjectsGetMetricsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scriptId" })
  scriptId: string;
}

export enum ScriptProjectsGetMetricsMetricsGranularityEnum {
    UnspecifiedGranularity = "UNSPECIFIED_GRANULARITY",
    Weekly = "WEEKLY",
    Daily = "DAILY"
}


export class ScriptProjectsGetMetricsQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metricsFilter.deploymentId" })
  metricsFilterDeploymentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metricsGranularity" })
  metricsGranularity?: ScriptProjectsGetMetricsMetricsGranularityEnum;

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


export class ScriptProjectsGetMetricsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ScriptProjectsGetMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ScriptProjectsGetMetricsPathParams;

  @SpeakeasyMetadata()
  queryParams: ScriptProjectsGetMetricsQueryParams;

  @SpeakeasyMetadata()
  security: ScriptProjectsGetMetricsSecurity;
}


export class ScriptProjectsGetMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  metrics?: shared.Metrics;

  @SpeakeasyMetadata()
  statusCode: number;
}
