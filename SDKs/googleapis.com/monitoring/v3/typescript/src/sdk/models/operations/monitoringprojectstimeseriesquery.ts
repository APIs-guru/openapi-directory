import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MonitoringProjectsTimeSeriesQueryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class MonitoringProjectsTimeSeriesQueryQueryParams extends SpeakeasyBase {
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


export class MonitoringProjectsTimeSeriesQuerySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringProjectsTimeSeriesQuerySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringProjectsTimeSeriesQuerySecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringProjectsTimeSeriesQuerySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: MonitoringProjectsTimeSeriesQuerySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: MonitoringProjectsTimeSeriesQuerySecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: MonitoringProjectsTimeSeriesQuerySecurityOption3;
}


export class MonitoringProjectsTimeSeriesQueryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MonitoringProjectsTimeSeriesQueryPathParams;

  @Metadata()
  queryParams: MonitoringProjectsTimeSeriesQueryQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.QueryTimeSeriesRequest;

  @Metadata()
  security: MonitoringProjectsTimeSeriesQuerySecurity;
}


export class MonitoringProjectsTimeSeriesQueryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  queryTimeSeriesResponse?: shared.QueryTimeSeriesResponse;

  @Metadata()
  statusCode: number;
}
