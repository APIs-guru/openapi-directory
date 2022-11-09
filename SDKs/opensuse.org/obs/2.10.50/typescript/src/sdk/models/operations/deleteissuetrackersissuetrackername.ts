import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteIssueTrackersIssueTrackerNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=issue_tracker_name" })
  issueTrackerName: string;
}


export class DeleteIssueTrackersIssueTrackerNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class DeleteIssueTrackersIssueTrackerNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteIssueTrackersIssueTrackerNamePathParams;

  @Metadata()
  security: DeleteIssueTrackersIssueTrackerNameSecurity;
}


export class DeleteIssueTrackersIssueTrackerNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
