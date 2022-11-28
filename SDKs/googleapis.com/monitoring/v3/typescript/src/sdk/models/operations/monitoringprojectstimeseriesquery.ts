import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MonitoringProjectsTimeSeriesQueryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class MonitoringProjectsTimeSeriesQueryQueryParams extends SpeakeasyBase {
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


export class MonitoringProjectsTimeSeriesQuerySecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringProjectsTimeSeriesQuerySecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringProjectsTimeSeriesQuerySecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringProjectsTimeSeriesQuerySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: MonitoringProjectsTimeSeriesQuerySecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: MonitoringProjectsTimeSeriesQuerySecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: MonitoringProjectsTimeSeriesQuerySecurityOption3;
}


export class MonitoringProjectsTimeSeriesQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MonitoringProjectsTimeSeriesQueryPathParams;

  @SpeakeasyMetadata()
  queryParams: MonitoringProjectsTimeSeriesQueryQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.QueryTimeSeriesRequest;

  @SpeakeasyMetadata()
  security: MonitoringProjectsTimeSeriesQuerySecurity;
}


export class MonitoringProjectsTimeSeriesQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  queryTimeSeriesResponse?: shared.QueryTimeSeriesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
