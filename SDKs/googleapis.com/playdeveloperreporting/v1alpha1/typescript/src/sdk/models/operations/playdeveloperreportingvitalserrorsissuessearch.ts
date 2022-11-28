import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PlaydeveloperreportingVitalsErrorsIssuesSearchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.day" })
  intervalEndTimeDay?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.hours" })
  intervalEndTimeHours?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.minutes" })
  intervalEndTimeMinutes?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.month" })
  intervalEndTimeMonth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.nanos" })
  intervalEndTimeNanos?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.seconds" })
  intervalEndTimeSeconds?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.timeZone.id" })
  intervalEndTimeTimeZoneId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.timeZone.version" })
  intervalEndTimeTimeZoneVersion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.utcOffset" })
  intervalEndTimeUtcOffset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.year" })
  intervalEndTimeYear?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.day" })
  intervalStartTimeDay?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.hours" })
  intervalStartTimeHours?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.minutes" })
  intervalStartTimeMinutes?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.month" })
  intervalStartTimeMonth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.nanos" })
  intervalStartTimeNanos?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.seconds" })
  intervalStartTimeSeconds?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.timeZone.id" })
  intervalStartTimeTimeZoneId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.timeZone.version" })
  intervalStartTimeTimeZoneVersion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.utcOffset" })
  intervalStartTimeUtcOffset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.year" })
  intervalStartTimeYear?: number;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class PlaydeveloperreportingVitalsErrorsIssuesSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlaydeveloperreportingVitalsErrorsIssuesSearchPathParams;

  @SpeakeasyMetadata()
  queryParams: PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams;
}


export class PlaydeveloperreportingVitalsErrorsIssuesSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googlePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse?: shared.GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
