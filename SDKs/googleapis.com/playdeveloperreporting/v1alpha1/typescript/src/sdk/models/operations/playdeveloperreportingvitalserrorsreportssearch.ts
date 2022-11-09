import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PlaydeveloperreportingVitalsErrorsReportsSearchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.day" })
  intervalEndTimeDay?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.hours" })
  intervalEndTimeHours?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.minutes" })
  intervalEndTimeMinutes?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.month" })
  intervalEndTimeMonth?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.nanos" })
  intervalEndTimeNanos?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.seconds" })
  intervalEndTimeSeconds?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.timeZone.id" })
  intervalEndTimeTimeZoneId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.timeZone.version" })
  intervalEndTimeTimeZoneVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.utcOffset" })
  intervalEndTimeUtcOffset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.year" })
  intervalEndTimeYear?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.day" })
  intervalStartTimeDay?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.hours" })
  intervalStartTimeHours?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.minutes" })
  intervalStartTimeMinutes?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.month" })
  intervalStartTimeMonth?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.nanos" })
  intervalStartTimeNanos?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.seconds" })
  intervalStartTimeSeconds?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.timeZone.id" })
  intervalStartTimeTimeZoneId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.timeZone.version" })
  intervalStartTimeTimeZoneVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.utcOffset" })
  intervalStartTimeUtcOffset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.year" })
  intervalStartTimeYear?: number;

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


export class PlaydeveloperreportingVitalsErrorsReportsSearchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlaydeveloperreportingVitalsErrorsReportsSearchPathParams;

  @Metadata()
  queryParams: PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams;
}


export class PlaydeveloperreportingVitalsErrorsReportsSearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googlePlayDeveloperReportingV1alpha1SearchErrorReportsResponse?: shared.GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse;

  @Metadata()
  statusCode: number;
}
