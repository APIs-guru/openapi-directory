import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetIssueTrackersIssueTrackerNameIssuesIssueNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=issue_name" })
  issueName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=issue_tracker_name" })
  issueTrackerName: string;
}


export class GetIssueTrackersIssueTrackerNameIssuesIssueNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetIssueTrackersIssueTrackerNameIssuesIssueNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetIssueTrackersIssueTrackerNameIssuesIssueNamePathParams;

  @Metadata()
  security: GetIssueTrackersIssueTrackerNameIssuesIssueNameSecurity;
}


export class GetIssueTrackersIssueTrackerNameIssuesIssueNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
