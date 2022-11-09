import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ClouderrorreportingProjectsEventsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectName" })
  projectName: string;
}

export enum ClouderrorreportingProjectsEventsListTimeRangePeriodEnum {
    PeriodUnspecified = "PERIOD_UNSPECIFIED"
,    Period1Hour = "PERIOD_1_HOUR"
,    Period6Hours = "PERIOD_6_HOURS"
,    Period1Day = "PERIOD_1_DAY"
,    Period1Week = "PERIOD_1_WEEK"
,    Period30Days = "PERIOD_30_DAYS"
}


export class ClouderrorreportingProjectsEventsListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupId" })
  groupId?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceFilter.resourceType" })
  serviceFilterResourceType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceFilter.service" })
  serviceFilterService?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceFilter.version" })
  serviceFilterVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeRange.period" })
  timeRangePeriod?: ClouderrorreportingProjectsEventsListTimeRangePeriodEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ClouderrorreportingProjectsEventsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClouderrorreportingProjectsEventsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ClouderrorreportingProjectsEventsListPathParams;

  @Metadata()
  queryParams: ClouderrorreportingProjectsEventsListQueryParams;

  @Metadata()
  security: ClouderrorreportingProjectsEventsListSecurity;
}


export class ClouderrorreportingProjectsEventsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listEventsResponse?: shared.ListEventsResponse;

  @Metadata()
  statusCode: number;
}
