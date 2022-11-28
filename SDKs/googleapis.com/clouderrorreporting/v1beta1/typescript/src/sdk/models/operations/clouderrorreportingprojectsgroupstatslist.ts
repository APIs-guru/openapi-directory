import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClouderrorreportingProjectsGroupStatsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectName" })
  projectName: string;
}

export enum ClouderrorreportingProjectsGroupStatsListAlignmentEnum {
    ErrorCountAlignmentUnspecified = "ERROR_COUNT_ALIGNMENT_UNSPECIFIED",
    AlignmentEqualRounded = "ALIGNMENT_EQUAL_ROUNDED",
    AlignmentEqualAtEnd = "ALIGNMENT_EQUAL_AT_END"
}

export enum ClouderrorreportingProjectsGroupStatsListOrderEnum {
    GroupOrderUnspecified = "GROUP_ORDER_UNSPECIFIED",
    CountDesc = "COUNT_DESC",
    LastSeenDesc = "LAST_SEEN_DESC",
    CreatedDesc = "CREATED_DESC",
    AffectedUsersDesc = "AFFECTED_USERS_DESC"
}

export enum ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum {
    PeriodUnspecified = "PERIOD_UNSPECIFIED",
    Period1Hour = "PERIOD_1_HOUR",
    Period6Hours = "PERIOD_6_HOURS",
    Period1Day = "PERIOD_1_DAY",
    Period1Week = "PERIOD_1_WEEK",
    Period30Days = "PERIOD_30_DAYS"
}


export class ClouderrorreportingProjectsGroupStatsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alignment" })
  alignment?: ClouderrorreportingProjectsGroupStatsListAlignmentEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alignmentTime" })
  alignmentTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupId" })
  groupId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: ClouderrorreportingProjectsGroupStatsListOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceFilter.resourceType" })
  serviceFilterResourceType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceFilter.service" })
  serviceFilterService?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceFilter.version" })
  serviceFilterVersion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeRange.period" })
  timeRangePeriod?: ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timedCountDuration" })
  timedCountDuration?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ClouderrorreportingProjectsGroupStatsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClouderrorreportingProjectsGroupStatsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ClouderrorreportingProjectsGroupStatsListPathParams;

  @SpeakeasyMetadata()
  queryParams: ClouderrorreportingProjectsGroupStatsListQueryParams;

  @SpeakeasyMetadata()
  security: ClouderrorreportingProjectsGroupStatsListSecurity;
}


export class ClouderrorreportingProjectsGroupStatsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listGroupStatsResponse?: shared.ListGroupStatsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
