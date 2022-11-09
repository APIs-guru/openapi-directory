import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MonitoringProjectsLocationPrometheusApiV1LabelsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location" })
  location: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class MonitoringProjectsLocationPrometheusApiV1LabelsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end" })
  end?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=match" })
  match?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringProjectsLocationPrometheusApiV1LabelsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption3;
}


export class MonitoringProjectsLocationPrometheusApiV1LabelsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MonitoringProjectsLocationPrometheusApiV1LabelsListPathParams;

  @Metadata()
  queryParams: MonitoringProjectsLocationPrometheusApiV1LabelsListQueryParams;

  @Metadata()
  security: MonitoringProjectsLocationPrometheusApiV1LabelsListSecurity;
}


export class MonitoringProjectsLocationPrometheusApiV1LabelsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpBody?: shared.HttpBody;

  @Metadata()
  statusCode: number;
}
