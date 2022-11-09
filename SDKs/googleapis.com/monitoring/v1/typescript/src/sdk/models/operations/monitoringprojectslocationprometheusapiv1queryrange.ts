import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MonitoringProjectsLocationPrometheusApiV1QueryRangePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location" })
  location: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class MonitoringProjectsLocationPrometheusApiV1QueryRangeQueryParams extends SpeakeasyBase {
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


export class MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption3;
}


export class MonitoringProjectsLocationPrometheusApiV1QueryRangeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MonitoringProjectsLocationPrometheusApiV1QueryRangePathParams;

  @Metadata()
  queryParams: MonitoringProjectsLocationPrometheusApiV1QueryRangeQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.QueryRangeRequest;

  @Metadata()
  security: MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurity;
}


export class MonitoringProjectsLocationPrometheusApiV1QueryRangeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpBody?: shared.HttpBody;

  @Metadata()
  statusCode: number;
}
