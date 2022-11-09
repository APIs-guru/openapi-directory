import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ClouderrorreportingProjectsGroupStatsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectName" })
  projectName: string;
}

export enum ClouderrorreportingProjectsGroupStatsListAlignmentEnum {
    ErrorCountAlignmentUnspecified = "ERROR_COUNT_ALIGNMENT_UNSPECIFIED"
,    AlignmentEqualRounded = "ALIGNMENT_EQUAL_ROUNDED"
,    AlignmentEqualAtEnd = "ALIGNMENT_EQUAL_AT_END"
}

export enum ClouderrorreportingProjectsGroupStatsListOrderEnum {
    GroupOrderUnspecified = "GROUP_ORDER_UNSPECIFIED"
,    CountDesc = "COUNT_DESC"
,    LastSeenDesc = "LAST_SEEN_DESC"
,    CreatedDesc = "CREATED_DESC"
,    AffectedUsersDesc = "AFFECTED_USERS_DESC"
}

export enum ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum {
    PeriodUnspecified = "PERIOD_UNSPECIFIED"
,    Period1Hour = "PERIOD_1_HOUR"
,    Period6Hours = "PERIOD_6_HOURS"
,    Period1Day = "PERIOD_1_DAY"
,    Period1Week = "PERIOD_1_WEEK"
,    Period30Days = "PERIOD_30_DAYS"
}


export class ClouderrorreportingProjectsGroupStatsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alignment" })
  alignment?: ClouderrorreportingProjectsGroupStatsListAlignmentEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alignmentTime" })
  alignmentTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupId" })
  groupId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: ClouderrorreportingProjectsGroupStatsListOrderEnum;

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
  timeRangePeriod?: ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timedCountDuration" })
  timedCountDuration?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ClouderrorreportingProjectsGroupStatsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClouderrorreportingProjectsGroupStatsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ClouderrorreportingProjectsGroupStatsListPathParams;

  @Metadata()
  queryParams: ClouderrorreportingProjectsGroupStatsListQueryParams;

  @Metadata()
  security: ClouderrorreportingProjectsGroupStatsListSecurity;
}


export class ClouderrorreportingProjectsGroupStatsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listGroupStatsResponse?: shared.ListGroupStatsResponse;

  @Metadata()
  statusCode: number;
}
