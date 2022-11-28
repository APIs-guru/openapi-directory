import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetIssueTrackersIssueTrackerNameIssuesIssueNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_name" })
  issueName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_tracker_name" })
  issueTrackerName: string;
}


export class GetIssueTrackersIssueTrackerNameIssuesIssueNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetIssueTrackersIssueTrackerNameIssuesIssueNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIssueTrackersIssueTrackerNameIssuesIssueNamePathParams;

  @SpeakeasyMetadata()
  security: GetIssueTrackersIssueTrackerNameIssuesIssueNameSecurity;
}


export class GetIssueTrackersIssueTrackerNameIssuesIssueNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
