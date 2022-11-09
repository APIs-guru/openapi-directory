import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=monitoredResourceContainer" })
  monitoredResourceContainer?: string;

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


export class MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption3;
}


export class MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams;

  @Metadata()
  security: MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity;
}


export class MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listMetricsScopesByMonitoredProjectResponse?: shared.ListMetricsScopesByMonitoredProjectResponse;

  @Metadata()
  statusCode: number;
}
