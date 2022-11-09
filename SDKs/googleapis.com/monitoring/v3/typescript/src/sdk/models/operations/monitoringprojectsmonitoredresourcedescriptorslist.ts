import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MonitoringProjectsMonitoredResourceDescriptorsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class MonitoringProjectsMonitoredResourceDescriptorsListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringProjectsMonitoredResourceDescriptorsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption4;
}


export class MonitoringProjectsMonitoredResourceDescriptorsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MonitoringProjectsMonitoredResourceDescriptorsListPathParams;

  @Metadata()
  queryParams: MonitoringProjectsMonitoredResourceDescriptorsListQueryParams;

  @Metadata()
  security: MonitoringProjectsMonitoredResourceDescriptorsListSecurity;
}


export class MonitoringProjectsMonitoredResourceDescriptorsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listMonitoredResourceDescriptorsResponse?: shared.ListMonitoredResourceDescriptorsResponse;

  @Metadata()
  statusCode: number;
}
