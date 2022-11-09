import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetIssueTrackersIssueTrackerNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=issue_tracker_name" })
  issueTrackerName: string;
}


export class GetIssueTrackersIssueTrackerNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetIssueTrackersIssueTrackerNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetIssueTrackersIssueTrackerNamePathParams;

  @Metadata()
  security: GetIssueTrackersIssueTrackerNameSecurity;
}


export class GetIssueTrackersIssueTrackerNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
