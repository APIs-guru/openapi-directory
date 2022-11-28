import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetIssueTrackersIssueTrackerNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_tracker_name" })
  issueTrackerName: string;
}


export class GetIssueTrackersIssueTrackerNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetIssueTrackersIssueTrackerNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIssueTrackersIssueTrackerNamePathParams;

  @SpeakeasyMetadata()
  security: GetIssueTrackersIssueTrackerNameSecurity;
}


export class GetIssueTrackersIssueTrackerNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
