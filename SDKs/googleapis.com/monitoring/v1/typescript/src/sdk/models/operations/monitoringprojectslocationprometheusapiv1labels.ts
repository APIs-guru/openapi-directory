import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MonitoringProjectsLocationPrometheusApiV1LabelsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location" })
  location: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class MonitoringProjectsLocationPrometheusApiV1LabelsQueryParams extends SpeakeasyBase {
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


export class MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringProjectsLocationPrometheusApiV1LabelsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption3;
}


export class MonitoringProjectsLocationPrometheusApiV1LabelsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MonitoringProjectsLocationPrometheusApiV1LabelsPathParams;

  @Metadata()
  queryParams: MonitoringProjectsLocationPrometheusApiV1LabelsQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ListLabelsRequest;

  @Metadata()
  security: MonitoringProjectsLocationPrometheusApiV1LabelsSecurity;
}


export class MonitoringProjectsLocationPrometheusApiV1LabelsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpBody?: shared.HttpBody;

  @Metadata()
  statusCode: number;
}
