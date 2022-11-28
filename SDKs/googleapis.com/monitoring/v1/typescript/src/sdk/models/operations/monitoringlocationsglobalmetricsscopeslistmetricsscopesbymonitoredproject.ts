import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=monitoredResourceContainer" })
  monitoredResourceContainer?: string;

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


export class MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption3;
}


export class MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams;

  @SpeakeasyMetadata()
  security: MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity;
}


export class MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listMetricsScopesByMonitoredProjectResponse?: shared.ListMetricsScopesByMonitoredProjectResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
