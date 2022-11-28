import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClouderrorreportingProjectsEventsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectName" })
  projectName: string;
}

export enum ClouderrorreportingProjectsEventsListTimeRangePeriodEnum {
    PeriodUnspecified = "PERIOD_UNSPECIFIED",
    Period1Hour = "PERIOD_1_HOUR",
    Period6Hours = "PERIOD_6_HOURS",
    Period1Day = "PERIOD_1_DAY",
    Period1Week = "PERIOD_1_WEEK",
    Period30Days = "PERIOD_30_DAYS"
}


export class ClouderrorreportingProjectsEventsListQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupId" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

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
  timeRangePeriod?: ClouderrorreportingProjectsEventsListTimeRangePeriodEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ClouderrorreportingProjectsEventsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClouderrorreportingProjectsEventsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ClouderrorreportingProjectsEventsListPathParams;

  @SpeakeasyMetadata()
  queryParams: ClouderrorreportingProjectsEventsListQueryParams;

  @SpeakeasyMetadata()
  security: ClouderrorreportingProjectsEventsListSecurity;
}


export class ClouderrorreportingProjectsEventsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listEventsResponse?: shared.ListEventsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
