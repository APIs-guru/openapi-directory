import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteIssueTrackersIssueTrackerNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_tracker_name" })
  issueTrackerName: string;
}


export class DeleteIssueTrackersIssueTrackerNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class DeleteIssueTrackersIssueTrackerNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteIssueTrackersIssueTrackerNamePathParams;

  @SpeakeasyMetadata()
  security: DeleteIssueTrackersIssueTrackerNameSecurity;
}


export class DeleteIssueTrackersIssueTrackerNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
