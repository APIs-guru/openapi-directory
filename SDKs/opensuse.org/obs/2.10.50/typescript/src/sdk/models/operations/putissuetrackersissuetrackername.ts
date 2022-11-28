import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutIssueTrackersIssueTrackerNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_tracker_name" })
  issueTrackerName: string;
}


export class PutIssueTrackersIssueTrackerNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PutIssueTrackersIssueTrackerNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutIssueTrackersIssueTrackerNamePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  request: Uint8Array;

  @SpeakeasyMetadata()
  security: PutIssueTrackersIssueTrackerNameSecurity;
}


export class PutIssueTrackersIssueTrackerNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
